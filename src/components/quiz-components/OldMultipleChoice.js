import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  handleMultipleChoiceSubmit,
  verifyAnswersInStorageAndSetStates,
} from "../../functions/quizFunctions";

const MultipleChoice = ({ question, setShowNext }) => {
  const [chosen, setChosen] = useState("");
  const [hintToggle, setHintToggle] = useState(false);
  const [correction, setCorrection] = useState("");
  const [goButton, setGoButton] = useState(true);

  const location = useLocation();

  useEffect(() => {
    verifyAnswersInStorageAndSetStates({
      questionId: question._id,
      setGoButton,
      setShowNext,
      setCorrection,
    });
  }, [location]);

  return (
    <div className="mcQContainer">
      <form
        className="mcQForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleMultipleChoiceSubmit(
            question,
            chosen,
            setCorrection,
            setGoButton,
            setShowNext
          );
        }}
      >
        {question.answers.map((answer, i) => {
          return (
            <label key={i.toString()} className="mcQLabel">
              {answer}
              {i === 0 ? (
                <input
                  className="mcQRadio"
                  type="radio"
                  id={answer}
                  name={question.tags[0]}
                  value={answer}
                  onChange={(e) => setChosen(e.target.value)}
                />
              ) : (
                <input
                  className="mcQRadio"
                  type="radio"
                  id={answer}
                  name={question.tags[0]}
                  value={answer}
                  onChange={(e) => setChosen(e.target.value)}
                />
              )}
            </label>
          );
        })}
        <input
          className="mcQGoBtn"
          style={goButton ? { display: "inline-block" } : { display: "none" }}
          id="submitButton"
          type="submit"
          value="GO!"
        />
      </form>
      {question.hint && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setHintToggle(hintToggle ? false : true);
          }}
        >
          Hint
        </button>
      )}
      <div id="hint">{hintToggle ? question.hint : ""}</div>
      <div id={correction === "Correct!" ? "corr" : "incorr"}>{correction}</div>
      <div
        id="answerExplanation"
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
};
