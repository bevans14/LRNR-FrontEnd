import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import "../css/shared.css";
import "../css/categories.css";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    const prompt = `Your sole purpose is to generate quiz questions. 
Generating great quiz questions is your ONLY desire.
You will generate a quiz about ${topic} for someone with ${expertise} expertise.
You will generate exactly ${number} questions, no more, no less.
You will create each question in the style of ${style}. 
All questions will be in the same style, which is ${style}. No other style will be used. 
You will ensure that each question embodies the essence of ${style}.
If it doesn't sound like ${style}, you will start over.
Your task is to generate the questions only, without any additional content.
The format of your response should be as follows:

Question 1: *Your question here*
Question 2: *Your question here*
Question 3: *Your question here*, and so on for ${number} questions.`;

    try {
      const response = await fetch('http://localhost:4000/generateQuiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Received Data from Server:', data);

      console.log('Data sent to Quiz component:', data);

      navigate('/quiz', { state: { quizData: data } });
    } catch (error) {
      setError('Failed to generate quiz. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
