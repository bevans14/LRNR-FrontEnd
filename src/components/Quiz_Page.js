import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Quiz_Page() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [evaluationResult, setEvaluationResult] = useState('');
  const [evaluationExplanation, setEvaluationExplanation] = useState('');
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const quizData = location.state?.questions || [];

  const handleAnswerChange = (e) => {
    const answer = e.target.value;
    setUserAnswers({ ...userAnswers, [currentQuestionIndex]: answer });
  };

  const handleSubmitAnswer = async () => {
    const currentQuestion = quizData[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    try {
      const response = await fetch(`http://localhost:4000/evaluation?question=${encodeURIComponent(currentQuestion)}&submission=${encodeURIComponent(userAnswer)}`, {
        method: 'GET',
      });
      const data = await response.json();
      setEvaluationResult(data.evaluation);
      setEvaluationExplanation(data.explanation);
    } catch (error) {
      console.error("Failed to submit answer for evaluation:", error);
      
    }
  };

  const handleNextQuestion = () => {
    setEvaluationResult('');
    setEvaluationExplanation('');
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
      navigate('/results', { state: { userAnswers, quizData } });
    }
  };

  return (
    <div className="container">
      <h1>Quiz Page</h1>
      {!isQuizFinished && quizData.length > 0 && (
        <>
          <h3>Question {currentQuestionIndex + 1}</h3>
          <p>{quizData[currentQuestionIndex]}</p>
          <div className="input-field col s12">
            <input
              type="text"
              id="answer"
              name="answer"
              value={userAnswers[currentQuestionIndex] || ''}
              onChange={handleAnswerChange}
            />
            <label htmlFor="answer" className={userAnswers[currentQuestionIndex] ? "active" : ""}>Your Answer</label>
          </div>
          <button
            className="btn waves-effect waves-light"
            onClick={handleSubmitAnswer}
            disabled={!userAnswers[currentQuestionIndex]}
          >
            Submit Answer
          </button>
          {evaluationResult && (
            <div className="evaluation-result">
              <strong>Evaluation:</strong> Your answer is {evaluationResult}.<br />
              <strong>Explanation:</strong> {evaluationExplanation}
            </div>
          )}
          <button
            className="btn waves-effect waves-light"
            style={{ marginTop: '20px' }}
            onClick={handleNextQuestion}
            disabled={evaluationResult === ''}
          >
            {currentQuestionIndex < quizData.length - 1 ? "Next Question" : "Finish Test"}
          </button>
        </>
      )}
      {isQuizFinished && (
        <div>
          <h3>Quiz Finished!</h3>
          <button
            className="btn waves-effect waves-light"
            onClick={() => navigate('/results', { state: { userAnswers, quizData } })}
          >
            View Results
          </button>
        </div>
      )}
    </div>
  );
}
