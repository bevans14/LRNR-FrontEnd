import React from "react";
import Home_Main from "./components/Home_Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./css/home.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Home_Main />
      <Footer />
    </div>
  );
}
