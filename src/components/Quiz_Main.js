const Quiz_Main = () => {
  return (
    <>
      <div className="container">
        <div className="section">
          <h1 id="ofCounter" className="header center teal-text main-header">
            Loading...
          </h1>
          <div className="row">
            <h2 className="teal-text">Question</h2>
            <div className="preloader-wrapper active" id="questionLoader">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="gap-patch">
                  <div className="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>
            </div>
            <div
              className="col s12 header-5 quiz-transition"
              id="questionBlock"
            ></div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="container">
        <div className="section">
          <div className="row">
            <h2 className="teal-text">Your Answer</h2>
            <div className="col s12 header-5">
              <div className="input-field">
                <textarea
                  id="selfAnswer"
                  className="materialize-textarea"
                  defaultValue={""}
                />
                <label htmlFor="selfAnswer">Answer</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                className="btn-large waves-effect waves-light teal"
                onclick="answerQuestion()"
              >
                Submit Answer
              </button>
              <button
                className="btn-large waves-effect waves-light teal"
                onclick="nextQuestion()"
              >
                Next Question
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      {/* <div class="container hide block-transition" id="answerContainer">
    <div class="section">
<div class="row">
  <h2 class="teal-text">ChatGPT's Answer</h2>
  <div class="col s12 l6 header-5 quiz-transition" id="answerBlock"></div>
</div>
    </div>
    <br><br>
  </div> */}
      <div className="container hide block-transition" id="evaluationContainer">
        <div className="section">
          <div className="row">
            <h2 className="teal-text">Verner's Evaluation</h2>
            <div
              className="col s12 l6 header-5 quiz-transition"
              id="answerBlock"
            />
            <div
              className="col s12 l6 header-5 quiz-transition"
              id="evaluationBlock"
            />
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="container hide block-transition" id="nextButtonContainer">
        <div className="section">
          <div className="row">
            <div className="col">
              <button
                className="btn-large waves-effect waves-light teal"
                onclick="nextQuestion()"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};
export default Quiz_Main;
