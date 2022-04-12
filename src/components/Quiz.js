import "../styles/quiz.css";
import { useState, useContext, useEffect, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ApiContext } from "../LessonsContext";

///////////////// IMPORTING QUIZ FUNCTIONS /////////////////
import {
  showQuestionTitle,
  showQuestionTable,
  showQuestionAlignment,
  filterThisLesson,
  filterThisQuestion,
  findNextQuestionIndex,
  handleDualDropdownSubmit,
  handleSingleDropdownSubmit,
  handleMultipleChoiceSubmit,
} from "../functions/quizFunctions";

const Quiz = () => {
  ///////////////// STATES & REFERENCES /////////////////
  const [correction, setCorrection] = useState("");
  const [goButton, setGoButton] = useState(true);
  const [hintToggle, setHintToggle] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [showFinishQuiz, setShowFinishQuiz] = useState(false);
  const score = useRef(0);
  const averageScore = useRef(0);
  const userAnswers = useRef([]);

  ///////////////// URL PARAMS & CONTEXT /////////////////
  const { lessonId, questionId } = useParams();
  const [lessons, setLessons] = useContext(ApiContext);
  const navigate = useNavigate();
  const location = useLocation();

  ///////////////// FILTERING CONTEXT FOR QUESTION RELATED DATA /////////////////
  const thisLesson = filterThisLesson(lessons, lessonId);
  const thisQuiz = thisLesson.quiz;
  const thisQuestion = filterThisQuestion(thisLesson, questionId);

  // average calculation & storage /////////////////
  averageScore.current = (score.current / thisQuiz.questions.length) * 100;
  localStorage.setItem("averageScore", averageScore.current);

  // only for when tags == "dropDown" /////////////////
  const [selectedAnswer, setSelectedAnswer] = useState(
    thisQuiz.questions[0] && thisQuiz.questions[0].answers[0]
  );
  const [selectedAnswer_1, setSelectedAnswer_1] = useState(
    thisQuiz.questions[0] && thisQuiz.questions[0].answers_1[0]
  );

  // only for when tags == "multipleChoice" /////////////////
  const [chosen, setChosen] = useState(() => {
    if (thisQuiz.questions[0] && thisQuestion.tags[0] === "multipleChoice") {
      return thisQuestion.answers[0];
    }
  });

  ///////////////// USE THE EFFECT FOR HANDLING BUTTONS ETC. /////////////////
  console.log(thisQuestion);
  useEffect(() => {
    setCorrection("");
    setGoButton(true);
    setShowNext(false);
    setShowFinishQuiz(false);
  }, [location]);
  useEffect(() => {
    const nextQuestionIndex = findNextQuestionIndex(thisLesson, questionId);
    if (!thisQuiz.questions[nextQuestionIndex] && goButton === false) {
      setShowNext(false);
      setShowFinishQuiz(true);
    } else {
      setShowFinishQuiz(false);
    }
  }, [goButton]);

  ///////////////// HANDLING NEXT BUTTON /////////////////
  const handleNext = () => {
    const nextQuestionIndex = findNextQuestionIndex(thisLesson, questionId);
    navigate(`/quiz/${lessonId}/${thisQuiz.questions[nextQuestionIndex]._id}`);
  };

  console.log(score);
  console.log(averageScore);

  ///////////////// RENDERING THE QUESTION /////////////////
  const showQuestion = (question) => {
    if (question.tags == "dropDown") {
      if (question.answers_1[0]) {
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
                  setShowNext,
                  score,
                  userAnswers
                );
              }}
            >
              <select
                className="ddQSelect"
                id="questionDropDown"
                name="questionDropDown"
                onChange={(e) => setSelectedAnswer(e.target.value)}
              >
                {question.answers.map((answer) => {
                  return (
                    <option className="ddQOption" value={answer}>
                      {answer}
                    </option>
                  );
                })}
              </select>
              <select
                className="ddQSelect"
                id="questionDropDown_1"
                name="questionDropDown_1"
                onChange={(e) => setSelectedAnswer_1(e.target.value)}
              >
                {question.answers_1.map((answer_1) => {
                  return (
                    <option className="ddQOption" value={answer_1}>
                      {answer_1}
                    </option>
                  );
                })}
              </select>
              <input
                className="ddQGoBtn"
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
                onClick={() => {
                  setHintToggle(hintToggle ? false : true);
                }}
              >
                Hint
              </button>
            )}
            <div id="hint">{hintToggle ? question.hint : ""}</div>
            <div id={correction == "Correct!" ? "corr" : "incorr"}>
              {correction}
            </div>
            <div
              id="answerExplanation"
              style={
                correction == "Incorrect!"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              {question.explanation}
            </div>
          </div>
        );
      } else {
        // if tags === "dropDown" && !answers_1
        return (
          <div className="ddQContainer">
            <form
              className="ddQForm"
              onSubmit={(e) => {
                e.preventDefault();
                handleSingleDropdownSubmit(
                  question,
                  selectedAnswer,
                  setCorrection,
                  setGoButton,
                  setShowNext,
                  score,
                  userAnswers
                );
              }}
            >
              <select
                className="ddQSelect"
                id="questionDropDown"
                name="questionDropDown"
              >
                {question.answers.map((answer) => {
                  return (
                    <option className="ddQOption" value={answer}>
                      {answer}
                    </option>
                  );
                })}
              </select>
              <input
                className="ddQGoBtn"
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
                onClick={(e) => {
                  setHintToggle(hintToggle ? false : true);
                }}
              >
                Hint
              </button>
            )}
            <div id="hint">{hintToggle ? question.hint : ""}</div>
            <div id={correction == "Correct!" ? "corr" : "incorr"}>
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
        );
      }
    } else {
      // if tags === "multipleChoice"
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
                setShowNext,
                score,
                userAnswers
              );
            }}
          >
            {question.answers.map((answer) => {
              return (
                <label className="mcQLabel">
                  {answer}
                  <input
                    className="mcQRadio"
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
              className="mcQGoBtn"
              style={
                goButton ? { display: "inline-block" } : { display: "none" }
              }
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
          <div id={correction == "Correct!" ? "corr" : "incorr"}>
            {correction}
          </div>
          <div
            id="answerExplanation"
            style={
              correction == "Incorrect!"
                ? { display: "block" }
                : { display: "none" }
            }
          >
            {question.explanation}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="quizContainer">
      {showQuestionTitle(thisQuestion)}

      {/************ SHOW QUESTION TEXT ************/}
      {thisQuestion.text[0] &&
        thisQuestion.text.map((paragraph) => {
          return (
            <div className="questionTextContainer">
              <p className="questionText">{paragraph}</p>
            </div>
          );
        })}
      {showQuestionTable(thisQuestion)}

      {thisQuestion.text_1[0] &&
        thisQuestion.text_1.map((paragraph) => {
          return (
            <div className="questionTextContainer">
              <p className="questionText">{paragraph}</p>
            </div>
          );
        })}

      {showQuestion(thisQuestion)}
      {showQuestionAlignment(thisQuestion)}

      {/************ NEXT BUTTON  ************/}
      <div className="quizButtonContainer">
        <button
          className="quizNextBtn"
          style={showNext ? { display: "inline" } : { display: "none" }}
          onClick={handleNext}
        >
          Next
        </button>

        <button
          className="finishQuizBtn"
          style={showFinishQuiz ? { display: "inline" } : { display: "none" }}
          onClick={() => {
            navigate(`/quiz/result/${lessonId}`);
          }}
        >
          Submit quiz result
        </button>
      </div>
    </div>
  );
};

export default Quiz;
