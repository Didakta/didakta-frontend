import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import {
  handleDualDropdownSubmit,
  verifyAnswersInStorageAndSetStates,
  findNextQuestionIndex,
  setStatesIfLastQuestion,
} from "../../functions/quizFunctions";

const DualDropDown = ({ question, lesson }) => {
  const navigate = useNavigate();
  const { lessonId, questionId } = useParams();
  const location = useLocation();

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

  useEffect(() => {
    setSelectedAnswer("");
    setSelectedAnswer_1("");
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

      <div className="ddq-ct">
        {/* first set of answers */}
        <div className="ddq-btn-ct">
          {question.answers.map((answer, i) => {
            return (
              <button
                key={i.toString()}
                className="ddq-btn"
                onClick={() => setSelectedAnswer(answer)}
              >
                {answer}
              </button>
            );
          })}
        </div>
        {/* second set of answers */}
        <div className="ddq-btn-ct">
          {question.answers_1.map((answer_1, i) => {
            return (
              <button
                key={i.toString()}
                className="ddq-btn"
                onClick={() => setSelectedAnswer_1(answer_1)}
              >
                {answer_1}
              </button>
            );
          })}
        </div>
      </div>

      <div className="ddq-user-answer">
        {selectedAnswer && selectedAnswer}{" "}
        {selectedAnswer_1 && selectedAnswer_1}
      </div>
      <div className="ddq-go-ct">
        <button
          className="ddq-go-btn"
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
          onClick={() => navigate(`/quiz/result/${lessonId}`)}
        >
          Submit quiz
        </button>
      </div>
    </>
  );
};

export default DualDropDown;
