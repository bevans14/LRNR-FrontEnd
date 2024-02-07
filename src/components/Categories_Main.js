import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import "../css/shared.css";
import "../css/categories.css";
import axios from 'axios';


export default function Categories_Main() {
  const navigate = useNavigate();
  const [topic, setTopic] = useState("");
  const [expertise, setExpertise] = useState("");
  const [number, setNumber] = useState("5");
  const [style, setStyle] = useState("normal");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Added this line

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
    setIsDropdownOpen(false);
  };
  
  const handleExpertiseChange = (e) => {
    setExpertise(e.target.value);
    setIsDropdownOpen(false);
  };
  
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
    setIsDropdownOpen(false);
  };
  
  const handleStyleChange = (e) => {
    setStyle(e.target.value);
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = {
        topic: topic,
        expertise: expertise,
        numQuestions: number,
        style: style,
    };
    console.log(details);
    try {
        let res = await axios.get('http://localhost:4000/questions', {
            params: details,
        });
        let result = await res.data;
        console.log(result);
        navigate('/quiz', { state: { results: result } });

    } catch (error) {
        console.log(error);
    }}
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col">
              <h3>Quiz Generation Options</h3>
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              Please choose your preferences below to generate your personalized quiz
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <select id="topic" value={topic} onChange={handleTopicChange}>
                  <option value="" disabled>Choose your topic</option>
                  <option value="golang">golang</option>
                  <option value="aws">aws</option>
                  <option value="javascript">javascript</option>
                  <option value="ci/cd">CI/CD</option>
                  <option value="home gardens">home gardens</option>
                  <option value="coffee">coffee</option>
                  <option value="finger foods">finger foods</option>
                </select>
                <label htmlFor="topic">Topic</label>
              </div>

              <div className="input-field col s12">
                <select id="expertise" value={expertise} onChange={handleExpertiseChange}>
                  <option value="" disabled>Choose your expertise level</option>
                  <option value="novice">novice</option>
                  <option value="intermediate">intermediate</option>
                  <option value="expert">expert</option>
                </select>
                <label htmlFor="expertise">Expertise</label>
              </div>

              <div className="input-field col s12">
                <select id="numquestions" value={number} onChange={handleNumberChange}>
                  <option value="" disabled>Choose the number of questions</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
                <label htmlFor="numquestions">Number of questions</label>
              </div>

              <div className="input-field col s12">
                <select id="questionstyle" value={style} onChange={handleStyleChange}>
                  <option value="" disabled>Choose the style of questions</option>
                  <option value="master oogway">master oogway</option>
                  <option value="1940's gangster">1940's gangster</option>
                  <option value="like i'm an 8 year old">like I'm an 8 year old</option>
                  <option value="normal">normal</option>
                  <option value="jedi">jedi</option>
                  <option value="captain jack sparrow">captain jack sparrow</option>
                  <option value="matthew mcconaughey">matthew mcconaughey</option>
                </select>
                <label htmlFor="questionstyle">Style of questions</label>
              </div>
            </div>

            <div className="input-field col s12">
              <button type="submit" className="btn waves-effect waves-light">
                Generate Quiz
              </button>
            </div>
          </form>
        </div>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
    </>
  );
}