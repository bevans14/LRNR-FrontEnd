import React, { useState, useEffect } from 'react';

export default function Quiz_Page({ quizDataProp }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    // Set quiz data received from props
    if (quizDataProp && quizDataProp.length > 0) {
      // Split received data into individual questions
      const questions = quizDataProp[0].split('\n');
      // Remove the first element which is empty
      questions.shift();
      // Update questions with the correct format
      const formattedQuestions = questions.map((question) => {
        // Extract question text
        const questionText = question.trim();
        return {
          questionText,
        };
      });
      setQuizData(formattedQuestions);
    }
  }, [quizDataProp]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz is over
      setIsQuizFinished(true);
    }
  };

  const handleAnswerChange = (e) => {
    const answer = e.target.value;
    setUserAnswers({ ...userAnswers, [currentQuestionIndex]: answer });
  };

  return (
    <div className="container">
      <h1>Quiz Page</h1>
      {!isQuizFinished && quizData.length > 0 && (
        <>
          <h3>Question {currentQuestionIndex + 1}</h3>
          <p>{quizData[currentQuestionIndex].questionText}</p>
          <div className="input-field col s12">
            <input
              type="text"
              id="answer"
              value={userAnswers[currentQuestionIndex] || ''}
              onChange={handleAnswerChange}
            />
            <label htmlFor="answer">Your Answer</label>
          </div>
          <button
            className="btn waves-effect waves-light"
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </>
      )}
      {isQuizFinished && (
        <>
          <h3>Quiz Finished!</h3>
          <p>Your answers:</p>
          <ul>
            {quizData.map((question, index) => (
              <li key={index}>
                Question {index + 1}: {question.questionText}
                <br />
                Your Answer: {userAnswers[index] || 'Not answered'}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
