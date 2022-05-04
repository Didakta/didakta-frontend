import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  handleDualDropdownSubmit,
  verifyAnswersInStorageAndSetStates,
} from "../../functions/quizFunctions";

const DualDropDown = ({ question, setShowNext }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswer_1, setSelectedAnswer_1] = useState("");
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
    <div className="ddQContainer">
      <form
        className="ddQForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleDualDropdownSubmit(
            question,
            selectedAnswer,
            selectedAnswer_1,
            setCorrection,
            setGoButton,
            setShowNext
          );
        }}
      >
        <div key={"default"}>
          <select
            defaultValue={"default"}
            className="ddQSelect"
            id="questionDropDown"
            name="questionDropDown"
            onChange={(e) => setSelectedAnswer(e.target.value)}
          >
            {question.answers.map((answer, i) => {
              return (
                <option className="ddQOption" value={answer}>
                  {answer}
                </option>
              );
            })}
            <option
              value={"default"}
              className="ddQOption"
              style={{ display: "none", textAlign: "center" }}
            >
              Choose an option
            </option>
          </select>
        </div>
        <div key={"default_1"}>
          <select
            defaultValue={"default_1"}
            className="ddQSelect"
            id="questionDropDown_1"
            name="questionDropDown_1"
            onChange={(e) => setSelectedAnswer_1(e.target.value)}
          >
            {question.answers_1.map((answer_1, i) => {
              return (
                <option className="ddQOption" value={answer_1}>
                  {answer_1}
                </option>
              );
            })}
            <option
              value={"default_1"}
              className="ddQOption"
              style={{ display: "none", textAlign: "center" }}
            >
              Choose an option
            </option>
          </select>
        </div>
        <input
          className="ddQGoBtn"
          style={goButton ? { display: "inline-block" } : { display: "none" }}
          id="submitButton"
          type="submit"
          value="Go!"
        />
      </form>
      {question.hint && (
        <button
          onClick={() => {
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
