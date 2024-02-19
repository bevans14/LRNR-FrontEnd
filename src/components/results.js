import React from "react";
import "../css/shared.css";

const Results = () => {
  return (
    <>
      {/* Hello world */}
      <div className="section no-pad-bot" id="index-banner">
        <div className="container body">
          <br />
          <br />
          <h1 className="header center teal-text main-header">lrnr</h1>
          <div className="row center">
            <p className="center header-5" id="correctAnswersBlock" />
          </div>
          <div className="row center">
            <p className="center header-5" id="correctAnswersBlock">
              Questions Right: 0
            </p>
            <a
              id="download-button"
              className="btn-large waves-effect waves-light teal"
              href="/categories"
            >
              Try Another Quiz
            </a>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};
export default Results;
