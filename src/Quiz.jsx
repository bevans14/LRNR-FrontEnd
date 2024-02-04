import React from "react";
import QuizPage from "./components/Quiz_Page";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Quiz() {
  const quizData = window.location.state?.quizData || [];
  console.log('Quiz Data:', quizData);
  
  return (
    <div>
      <Navbar />
      <QuizPage quizDataProp={quizData} />
      <Footer />
    </div>
  );
}