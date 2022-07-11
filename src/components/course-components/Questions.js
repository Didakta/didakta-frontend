import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { handleMultipleChoiceSubmit } from "../../functions/quizFunctions";

const Questions = ({ questions }) => {
  const [correction, setCorrection] = useState("");
  const [goButton, setGoButton] = useState(true);
  const [hintToggle, setHintToggle] = useState(false);
  const [chosen, setChosen] = useState();
  const score = useRef(0);
  const userAnswers = useRef([]);

  const location = useLocation();

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswer_1, setSelectedAnswer_1] = useState("");
  useEffect(() => {
    setCorrection("");
    setGoButton(true);
  }, [location]);

  return (
    <div className="chapter-question-ct">
      {questions.map((question, i) => {
        if (question.tags[0] === "dropDown") {
          if (question.answers_1[0]) {
            return (
              // rendering the text of each question inside chapter + answers (Drop Down)
              <div key={i.toString()} className="dd-ct">
                <p className="dd-text">{question.text[0]}</p>
                <form
                  className="dd-form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (
                      question.answers[question.correctAnswer] ===
                        selectedAnswer &&
                      question.answers_1[question.correctAnswer_1] ===
                        selectedAnswer_1
                    ) {
                      setCorrection("Correct!");
                      setGoButton(false);
                    } else {
                      setCorrection("Incorrect!");
                      setGoButton(false);
                    }
                  }}
                >
                  <select
                    className="dd-select"
                    id="questionDropDown"
                    name="questionDropDown"
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  >
                    {question.answers.map((answer, i2) => {
                      return (
                        <option
                          key={i2.toString()}
                          className="dd-option"
                          value={answer}
                        >
                          {answer}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="dd-select"
                    id="questionDropDown_1"
                    name="questionDropDown_1"
                    onChange={(e) => setSelectedAnswer_1(e.target.value)}
                  >
                    {question.answers_1.map((answer_1, i2) => {
                      return (
                        <option
                          key={i2.toString()}
                          className="dd-option"
                          value={answer_1}
                        >
                          {answer_1}
                        </option>
                      );
                    })}
                  </select>
                  <input
                    className="dd-btn"
                    style={
                      goButton
                        ? { display: "inline-block" }
                        : { display: "none" }
                    }
                    id="submitButton"
                    type="submit"
                    value="Go!"
                  />
                </form>
                {question.hint && (
                  <button
                    className="hint-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHintToggle(hintToggle ? false : true);
                    }}
                  >
                    Hint
                  </button>
                )}
                <div id="hint">{hintToggle ? question.hint : ""}</div>
                <div id={correction === "Correct!" ? "corr" : "incorr"}>
                  {correction}
                </div>
                <div
                  className="explanation"
                  style={
                    correction === "Incorrect!"
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  {question.explanation}
                </div>
              </div>
            );
          } else {
            return (
              <div key={i.toString()} className="dd-ct">
                <form className="dd-form">
                  <select
                    className="dd-select"
                    id="questionDropDown"
                    name="questionDropDown"
                  >
                    {question.answers.map((answer, i2) => {
                      return (
                        <option
                          key={i2.toString()}
                          className="dd-option"
                          value={answer}
                        >
                          {answer}
                        </option>
                      );
                    })}
                  </select>
                </form>
              </div>
            );
          }
        } else {
          // if tags === "MultipleChoice"
          return (
            <div key={i.toString()} className="mc-ct">
              <p className="mc-text">{question.text[0]}</p>
              <form
                className="mc-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleMultipleChoiceSubmit(
                    question,
                    chosen,
                    setCorrection,
                    setGoButton,
                    score,
                    userAnswers
                  );
                }}
              >
                {question.answers.map((answer, i2) => {
                  return (
                    <label key={i2.toString()} className="mc-label">
                      {answer}
                      <input
                        className="mc-input"
                        type="radio"
                        id={answer}
                        name={question.tags[0]}
                        value={answer}
                        onChange={(e) => setChosen(e.target.value)}
                      />
                    </label>
                  );
                })}
                <input
                  className="mc-btn"
                  style={
                    goButton ? { display: "inline-block" } : { display: "none" }
                  }
                  id="submitButton"
                  type="submit"
                  value="Go!"
                />
              </form>
              {question.hint && (
                <button
                  className="hint-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setHintToggle(hintToggle ? false : true);
                  }}
                >
                  Hint
                </button>
              )}
              <div id="hint">{hintToggle ? question.hint : ""}</div>
              <div id={correction === "Correct!" ? "corr" : "incorr"}>
                {correction}
              </div>
              <div
                className="explanation"
                style={
                  correction === "Incorrect!"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                {question.explanation}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Questions;
