import React from "react";
import Account_Main from "./components/Account_Main";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Quiz_Main from "./components/Quiz_Main";
import "./css/account.css";

export default function Quiz() {
  return (
    <div>
      <Navbar />
      <Quiz_Main />
      <Footer />
    </div>
  );
}