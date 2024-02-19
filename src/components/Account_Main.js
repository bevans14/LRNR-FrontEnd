import React from "react";
//import the materialize css file
import "materialize-css/dist/css/materialize.min.css";

const Account_Main = () => {
  return (
    <div className="container">
      {/* Include the Material Icons link in the head of your HTML file */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <div className="section">
        <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center teal-text text-accent-3">
                <i className="material-icons">whatshot</i>
              </h2>
              <p className="header-5 center">Streak</p>
              <p className="light">You have a streak of 5 days!</p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center teal-text text-accent-3">
                <i className="material-icons">view_list</i>
              </h2>
              <p className="header-5 center">Platinum Quizzes</p>
              <ul>
                <li className="light">golang - intermediate</li>
                <li className="light">Javascript - beginner </li>
                <li className="light">AWS - beginner</li>
              </ul>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center teal-text text-accent-3">
                <i className="material-icons">person</i>
              </h2>
              <p className="header-5 center">lrnr Level: 2</p>
              <p className="light center">150/200 xp</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Account_Main;
