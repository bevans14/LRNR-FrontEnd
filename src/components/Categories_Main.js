import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "../css/shared.css";

export default function Categories_Main() {
  const [topic, setTopic] = useState("");
  const [expertise, setExpertise] = useState("");
  const [number, setNumber] = useState("5");
  const [style, setStyle] = useState("normal");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };
  const handleExpertiseChange = (e) => {
    setExpertise(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleStyleChange = (e) => {
    setStyle(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="container">
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <div className="section">
          <div className="row">
            <div className="col">
              <h3>Quiz Generation Options</h3>
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              Please choose your preferences below to generate your personalized
              quiz
            </div>
          </div>
          <br />
          <div className="row">
            {/* <div className="input-field col s12">
              <div className="select-wrapper">
                <input
                  className="select-dropdown dropdown-trigger"
                  type="text"
                  readOnly="true"
                  data-target="select-options-c155c2b2-b990-ba5b-a123-8ef1407fb714">
                  <ul
                    id="select-options-c155c2b2-b990-ba5b-a123-8ef1407fb714"
                    className="dropdown-content select-dropdown"
                    tabIndex="0">
                    <li
                      className="disabled selected"
                      id="select-options-c155c2b2-b990-ba5b-a123-8ef1407fb7140"
                      tabIndex="0">
                      <span></span>
                    </li>
                    <li
                      id="select-options-c155c2b2-b990-ba5b-a123-8ef1407fb7141"
                      tabIndex="0">
                      <span>golang</span>
                    </li>
                    <li
                      id="select-options-c155c2b2-b990-ba5b-a123-8ef1407fb7142"
                      tabIndex="0">
                      <span>aws</span>
                    </li>
                    <li
                      id="select-options-c155c2b2-b990-ba5b-a123-8ef1407fb7143"
                      tabIndex="0">
                      <span>javascript</span>
                    </li>
                    <li
                      id="select-options-c155c2b2-b990-ba5b-a123-8ef1407fb7144"
                      tabIndex="0">
                      <span>CI/CD</span>
                    </li>
                    <li
                      id="select-options-c155c2b2-b990-ba5b-a123-8ef1407fb7145"
                      tabIndex="0">
                      <span>home gardens</span>
                    </li>
                    <li
                      id="select-options-c155c2b2-b990-ba5b-a123-8ef1407fb7146"
                      tabIndex="0">
                      <span>coffee</span>
                    </li>
                    <li
                      id="select-options-c155c2b2-b990-ba5b-a123-8ef1407fb7147"
                      tabIndex="0">
                      <span>finger foods</span>
                    </li>
                  </ul>
                  <svg
                    className="caret"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                  </svg>
                  <select
                    name="topic"
                    id="topic"
                    onChange={handleTopicChange}
                    value={topic}
                    tabindex="-1">
                    <option value="" disabled=""></option>
                    <option value="golang">golang</option>
                    <option value="aws">aws</option>
                    <option value="javascript">javascript</option>
                    <option value="ci/cd">CI/CD</option>
                    <option value="growing you own garden">home gardens</option>
                    <option value="coffee">coffee</option>
                    <option value="finger food">finger foods</option>
                  </select>
                </input>
              </div>
              <label htmlFor="topic">Topic</label>
            </div> */}
            <div className="input-field col s12">
              <div className="select-wrapper">
                <input
                  className="select-dropdown dropdown-trigger"
                  type="text"
                  readOnly="true"
                  data-target="select-options-91d287a4-382f-2363-e295-63f8907bb9ec"
                />
                <ul
                  id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec"
                  className="dropdown-content select-dropdown"
                  tabIndex={0}
                  style={{
                    display: "block",
                    width: "228.297px",
                    left: 0,
                    top: 0,
                    height: 400,
                    transformOrigin: "0px 0px",
                    opacity: 1,
                    transform: "scaleX(1) scaleY(1)",
                  }}>
                  <li
                    className="disabled selected"
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec0"
                    tabIndex={0}>
                    <span />
                  </li>
                  <li
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec1"
                    tabIndex={0}>
                    <span>golang</span>
                  </li>
                  <li
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec2"
                    tabIndex={0}>
                    <span>aws</span>
                  </li>
                  <li
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec3"
                    tabIndex={0}>
                    <span>javascript</span>
                  </li>
                  <li
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec4"
                    tabIndex={0}>
                    <span>CI/CD</span>
                  </li>
                  <li
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec5"
                    tabIndex={0}>
                    <span>home gardens</span>
                  </li>
                  <li
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec6"
                    tabIndex={0}>
                    <span>coffee</span>
                  </li>
                  <li
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec7"
                    tabIndex={0}>
                    <span>finger foods</span>
                  </li>
                </ul>
                <svg
                  className="caret"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <select id="topic" tabIndex={-1}>
                  <option value="" disabled="" selected="" />
                  <option value="golang">golang</option>
                  <option value="aws">aws</option>
                  <option value="javascript">javascript</option>
                  <option value="ci/cd">CI/CD</option>
                  <option value="growing you own garden">home gardens</option>
                  <option value="coffee">coffee</option>
                  <option value="finger food">finger foods</option>
                </select>
              </div>
              <label>Topic</label>
            </div>

            <div className="input-field col s12">
              <div className="select-wrapper">
                <input
                  className="select-dropdown dropdown-trigger"
                  type="text"
                  readOnly="true"
                  data-target="select-options-91d287a4-382f-2363-e295-63f8907bb9ec"
                />
                <ul
                  id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec"
                  className="dropdown-content select-dropdown"
                  tabIndex={0}
                  style={{
                    display: "block",
                    width: "228.297px",
                    left: 0,
                    top: 0,
                    height: 400,
                    transformOrigin: "0px 0px",
                    opacity: 1,
                    transform: "scaleX(1) scaleY(1)",
                  }}>
                  <li
                    className="disabled selected"
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec0"
                    tabIndex={0}>
                    <span />
                  </li>
                  <li
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec1"
                    tabIndex={0}>
                    <span>golang</span>
                  </li>
                  <li
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec2"
                    tabIndex={0}>
                    <span>aws</span>
                  </li>
                  <li
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec3"
                    tabIndex={0}>
                    <span>javascript</span>
                  </li>
                  <li
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec4"
                    tabIndex={0}>
                    <span>CI/CD</span>
                  </li>
                  <li
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec5"
                    tabIndex={0}>
                    <span>home gardens</span>
                  </li>
                  <li
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec6"
                    tabIndex={0}>
                    <span>coffee</span>
                  </li>
                  <li
                    id="select-options-91d287a4-382f-2363-e295-63f8907bb9ec7"
                    tabIndex={0}>
                    <span>finger foods</span>
                  </li>
                </ul>
                <svg
                  className="caret"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <select id="topic" tabIndex={-1}>
                  <option value="" disabled="" selected="" />
                  <option value="golang">golang</option>
                  <option value="aws">aws</option>
                  <option value="javascript">javascript</option>
                  <option value="ci/cd">CI/CD</option>
                  <option value="growing you own garden">home gardens</option>
                  <option value="coffee">coffee</option>
                  <option value="finger food">finger foods</option>
                </select>
              </div>
              <label>Expertise</label>
            </div>
            <div className="input-field col s12">
              <div className="select-wrapper">
                <input
                  className="select-dropdown dropdown-trigger"
                  type="text"
                  readOnly="true"
                  data-target="select-options-9ce5f51b-888e-8cc2-e1a6-6ba3a95d714d"
                />
                <ul
                  id="select-options-9ce5f51b-888e-8cc2-e1a6-6ba3a95d714d"
                  className="dropdown-content select-dropdown"
                  tabIndex={0}
                  style={{
                    display: "block",
                    width: "444.297px",
                    left: 0,
                    top: 0,
                    height: 200,
                    transformOrigin: "0px 0px",
                    opacity: 1,
                    transform: "scaleX(1) scaleY(1)",
                  }}>
                  <li
                    className="disabled"
                    id="select-options-9ce5f51b-888e-8cc2-e1a6-6ba3a95d714d0"
                    tabIndex={0}>
                    <span />
                  </li>
                  <li
                    id="select-options-9ce5f51b-888e-8cc2-e1a6-6ba3a95d714d1"
                    tabIndex={0}
                    className="selected">
                    <span>5</span>
                  </li>
                  <li
                    id="select-options-9ce5f51b-888e-8cc2-e1a6-6ba3a95d714d2"
                    tabIndex={0}>
                    <span>10</span>
                  </li>
                  <li
                    id="select-options-9ce5f51b-888e-8cc2-e1a6-6ba3a95d714d3"
                    tabIndex={0}>
                    <span>15</span>
                  </li>
                </ul>
                <svg
                  className="caret"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <select id="numquestions" tabIndex={-1}>
                  <option value="" disabled="" />
                  <option value={5} selected="">
                    5
                  </option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                </select>
              </div>
              <label>Number of questions</label>
            </div>

            <div className="input-field col s12">
              <div className="select-wrapper">
                <input
                  className="select-dropdown dropdown-trigger"
                  type="text"
                  readOnly="true"
                  data-target="select-options-72005b65-09d1-16b3-aca8-3e496995585a"
                />
                <ul
                  id="select-options-72005b65-09d1-16b3-aca8-3e496995585a"
                  className="dropdown-content select-dropdown"
                  tabIndex={0}
                  style={{}}>
                  <li
                    className="disabled"
                    id="select-options-72005b65-09d1-16b3-aca8-3e496995585a0"
                    tabIndex={0}>
                    <span />
                  </li>
                  <li
                    id="select-options-72005b65-09d1-16b3-aca8-3e496995585a1"
                    tabIndex={0}>
                    <span>master oogway</span>
                  </li>
                  <li
                    id="select-options-72005b65-09d1-16b3-aca8-3e496995585a2"
                    tabIndex={0}>
                    <span>1940's gangster</span>
                  </li>
                  <li
                    id="select-options-72005b65-09d1-16b3-aca8-3e496995585a3"
                    tabIndex={0}>
                    <span>like I'm an 8 year old</span>
                  </li>
                  <li
                    id="select-options-72005b65-09d1-16b3-aca8-3e496995585a4"
                    tabIndex={0}
                    className="selected">
                    <span>normal</span>
                  </li>
                  <li
                    id="select-options-72005b65-09d1-16b3-aca8-3e496995585a5"
                    tabIndex={0}>
                    <span>jedi</span>
                  </li>
                  <li
                    id="select-options-72005b65-09d1-16b3-aca8-3e496995585a6"
                    tabIndex={0}>
                    <span>captain jack sparrow</span>
                  </li>
                  <li
                    id="select-options-72005b65-09d1-16b3-aca8-3e496995585a7"
                    tabIndex={0}>
                    <span>matthew mcconaughey</span>
                  </li>
                </ul>
                <svg
                  className="caret"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <select id="questionstyle" tabIndex={-1}>
                  <option value="" disabled="" />
                  <option value="master oogway">master oogway</option>
                  <option value="1940's gangster">1940's gangster</option>
                  <option value="like i'm an 8 year old">
                    like I'm an 8 year old
                  </option>
                  <option value="normal" selected="">
                    normal
                  </option>
                  <option value="master yoda">jedi</option>
                  <option value="captain jack sparrow">
                    captain jack sparrow
                  </option>
                  <option value="matthew mcconaughey">
                    matthew mcconaughey
                  </option>
                </select>
              </div>
              <label>Style of questions</label>
            </div>

            <div className="input-field col s12">
              <button
                id="btn-categories"
                className="btn waves-effect waves-light">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
