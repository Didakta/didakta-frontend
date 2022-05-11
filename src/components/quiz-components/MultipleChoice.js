import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import {
  handleMultipleChoiceSubmit,
  verifyAnswersInStorageAndSetStates,
  findNextQuestionIndex,
  setStatesIfLastQuestion,
  submitQuiz,
} from "../../functions/quizFunctions";

const MultipleChoice = ({ question, lesson }) => {
  const navigate = useNavigate();
  const { lessonId, questionId } = useParams();
  const location = useLocation();

  const quizId = lesson.quiz._id;

  const [chosen, setChosen] = useState("");
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
  }, [goButton, questionId, lesson]);

  useEffect(() => {
    setChosen("");
  }, [location]);

  return (
    <>
      <div className="hint-ct">
        {question.hint && (
          <>
            <button onClick={() => setHintToggle(hintToggle ? false : true)}>
              Hint
            </button>
            <div id="hint">{hintToggle ? question.hint : ""}</div>
          </>
        )}
      </div>

      <div className="mcq-ct">
        <div className="mcq-btn-ct">
          {question.answers.map((answer, i) => {
            return (
              <button
                key={i.toString()}
                className="mcq-btn"
                id={answer}
                onClick={() => setChosen(answer)}
              >
                {answer}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mcq-go-ct">
        <button
          onClick={() => {
            handleMultipleChoiceSubmit(
              question,
              chosen,
              setCorrection,
              setGoButton,
              setShowNext
            );
          }}
          className="mcq-go-btn"
          style={goButton ? { display: "inline-block" } : { display: "none" }}
        >
          GO!
        </button>
      </div>
      <div id={correction === "Correct!" ? "corr" : "incorr"}>{correction}</div>
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
      {/************  BUTTONS  ************/}
      <div className="quiz-btn-ct">
        <button
          className="quiz-next-btn"
          style={showNext ? { display: "inline" } : { display: "none" }}
          onClick={handleNext}
        >
          Next
        </button>
        <button
          style={
            showFinishQuiz ? { display: "inline-block" } : { display: "none" }
          }
          className="quiz-finish-btn"
          onClick={() => submitQuiz(navigate, lessonId, quizId)}
        >
          Submit quiz
        </button>
      </div>
    </>
  );
};

export default MultipleChoice;
