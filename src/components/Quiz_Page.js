import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/quiz.css";
import "../css/shared.css";

export default function Quiz_Page() {
  const location = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  //access the questions passed via state
  const [quizData, setQuizData] = useState(location.state?.questions || []);

  useEffect(() => {}, [quizData]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleAnswerChange = (e) => {
    const answer = e.target.value;
    setUserAnswers({ ...userAnswers, [currentQuestionIndex]: answer });
  };

  return (
    <div className="container body">
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
              value={userAnswers[currentQuestionIndex] || ""}
              onChange={handleAnswerChange}
            />
            <label
              htmlFor="answer"
              className={userAnswers[currentQuestionIndex] ? "active" : ""}
            >
              Your Answer
            </label>
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
                Question {index + 1}: {question}
                <br />
                Your Answer: {userAnswers[index] || "Not answered"}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}