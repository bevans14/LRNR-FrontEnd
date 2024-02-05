import React from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "../css/home.css";

export default function Home_Main() {
  return (
    <div>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <br></br>
          <div className="banner">
            <img src="../assets/images/completelogo.png" alt="CompleteLogo" />
          </div>
          <div className="row center">
            <p className="header-5 col s12 light sub-header">
              Your guided path to programming enlightenment
            </p>
          </div>
          <div className="row center">
            {/* FIXME Link to Quiz? or link to login for phase 2? */}
            <a
              id="download-button"
              className="btn-large waves-effect waves-light teal"
            >
              Begin Journey
            </a>
          </div>
          <br></br>
        </div>
      </div>
      <div className="container">
        <div className="section">
          {/* Icon Section */}
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center teal-text text-accent-3">
                  <i className="material-icons">flash_on</i>
                </h2>
                <p className="center header-5">Personalized Quizzes</p>
                <p className="light">
                  Greetings, young padawan. Are you ready to embark on a journey
                  of personalized enlightenment through the art of coding? Our
                  app, can create custom quizzes that align with your coding
                  skills and interests. Whether you are a novice or a master,
                  our system can generate questions that will test your
                  proficiency in programming languages, tools, and concepts
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center teal-text text-accent-3">
                  <i className="material-icons">payments</i>
                </h2>
                <p className="center header-5">Rewarding</p>
                <p className="light">
                  Our app is designed to be both challenging and rewarding, so
                  you can learn new concepts while enjoying the process. With
                  our personalized quiz app, you can track your progress,
                  compete with your peers, and discover new areas of expertise.
                  The journey of a thousand lines of code begins with a single
                  keystroke
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center teal-text text-accent-3">
                  <i className="material-icons">person</i>
                </h2>
                <p className="center header-5">Personal SME</p>
                <p className="light">
                  Welcome to the path of knowledge. Our app is like having a
                  personal subject matter expert at your side, guiding you on
                  your journey towards wisdom
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
}
