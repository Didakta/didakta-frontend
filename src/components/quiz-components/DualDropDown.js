import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  handleDualDropdownSubmit,
  verifyAnswersInStorageAndSetStates,
  findNextQuestionIndex,
  setStatesIfLastQuestion,
} from "../../functions/quizFunctions";

const DualDropDown = ({ question, lesson }) => {
  const navigate = useNavigate();
  const { lessonId, questionId } = useParams();

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswer_1, setSelectedAnswer_1] = useState("");
  const [hintToggle, setHintToggle] = useState(false);
  const [correction, setCorrection] = useState("");
  const [goButton, setGoButton] = useState(true);
  const [showNext, setShowNext] = useState(false);
  const [showFinishQuiz, setShowFinishQuiz] = useState(false);

  const handleNext = () => {
    const nextQuestionIndex = findNextQuestionIndex(lesson, questionId);
    navigate(
      `/quiz/${lessonId}/${lesson.quiz.questions[nextQuestionIndex]._id}`
    );
  };

  useEffect(() => {
    verifyAnswersInStorageAndSetStates({
      questionId: question._id,
      setGoButton,
      setShowNext,
      setCorrection,
    });
  }, [question._id]);

  useEffect(() => {
    const nextQuestionIndex = findNextQuestionIndex(lesson, questionId);
    setStatesIfLastQuestion({
      quiz: lesson.quiz,
      nextQuestionIndex,
      goButton,
      setShowNext,
      setShowFinishQuiz,
    });
  }, [goButton]);

  return (
    <>
      <div className="ddQContainer">
        {/* set of answers */}
        <div className="ddQForm">
          {/* first set of answers */}
          <div className="ddQSelect">
            {question.answers.map((answer, i) => {
              return (
                <button
                  key={i.toString()}
                  className="ddQOption"
                  onClick={() => setSelectedAnswer(answer)}
                >
                  {answer}
                </button>
              );
            })}
          </div>

          {/* second set of answers */}
          <div className="ddQSelect">
            {question.answers_1.map((answer_1, i) => {
              return (
                <button
                  key={i.toString()}
                  className="ddQOption"
                  onClick={() => setSelectedAnswer_1(answer_1)}
                >
                  {answer_1}
                </button>
              );
            })}
          </div>

          <button
            className="ddQGoBtn"
            style={goButton ? { display: "inline-block" } : { display: "none" }}
            onClick={() =>
              handleDualDropdownSubmit(
                question,
                selectedAnswer,
                selectedAnswer_1,
                setCorrection,
                setGoButton,
                setShowNext
              )
            }
          >
            GO!
          </button>
        </div>
        {question.hint && (
          <button onClick={() => setHintToggle(hintToggle ? false : true)}>
            Hint
          </button>
        )}
        <div id="hint">{hintToggle ? question.hint : ""}</div>
        <div id={correction === "Correct!" ? "corr" : "incorr"}>
          {correction}
        </div>
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
      {/************  BUTTONS  ************/}
      <div className="quizButtonContainer">
        <button
          className="quizNextBtn"
          style={showNext ? { display: "inline" } : { display: "none" }}
          onClick={handleNext}
        >
          Next
        </button>
        <button
          style={
            showFinishQuiz ? { display: "inline-block" } : { display: "none" }
          }
          className="finishQuizBtn"
          onClick={() => navigate(`/quiz/result/${lessonId}`)}
        >
          Submit quiz
        </button>
      </div>
    </>
  );
};

export default DualDropDown;
