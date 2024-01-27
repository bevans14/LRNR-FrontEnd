import React from "react";
import Account_Main from "./components/Account_Main";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./css/account.css";
export default function Account() {
  return (
      <div>
          <Navbar />
          <Header />
          <Account_Main />
    </div>
  )
}
 