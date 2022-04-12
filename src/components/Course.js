import "../styles/course.css";
import { useState, useContext, useEffect, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ApiContext } from "../LessonsContext";
import List from "./List";
import {
  showTitle,
  showTable,
  showTable_1,
  showVideo,
  showAudioText,
  showAudio,
  showQuestionText,
  showImg,
  showAlignmentText,
  showAlignment,
  showFootnotes,
} from "../functions/lessonFunctions";

import { handleMultipleChoiceSubmit } from "../functions/quizFunctions";

const Course = () => {
  const [correction, setCorrection] = useState("");
  const [goButton, setGoButton] = useState(true);
  const [hintToggle, setHintToggle] = useState(false);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [showGoQuiz, setShowGoQuiz] = useState(false);
  const [chosen, setChosen] = useState();
  const score = useRef(0);
  const userAnswers = useRef([]);

  const { lessonId, chapterId } = useParams();
  const [lessons, setLessons] = useContext(ApiContext);
  const navigate = useNavigate();
  const location = useLocation();

  const thisLesson = lessons.__html.filter(
    (lesson) => lesson._id === lessonId
  )[0];
  const thisChapter = thisLesson.chapters.filter(
    (chapter) => chapter._id === chapterId
  )[0];

  const [selectedAnswer, setSelectedAnswer] = useState(
    thisChapter.questions[0] && thisChapter.questions[0].answers[0]
  );
  const [selectedAnswer_1, setSelectedAnswer_1] = useState(
    thisChapter.questions[0] && thisChapter.questions[0].answers_1[0]
  );

  useEffect(() => {
    setCorrection("");
    setGoButton(true);
  }, [location]);

  const handlePrev = () => {
    let prevChapterNumber = thisChapter.number - 1;
    let prevChapter = thisLesson.chapters.filter(
      (chapter) => chapter.number == prevChapterNumber
    );
    navigate(`/course/${lessonId}/${prevChapter[0]._id}`);
  };
  const handleNext = () => {
    let nextChapterNumber = thisChapter.number + 1;
    let nextChapter = thisLesson.chapters.filter(
      (chapter) => chapter.number == nextChapterNumber
    );
    navigate(`/course/${lessonId}/${nextChapter[0]._id}`);
  };

  const handleGoQuiz = () => {
    if (thisLesson.quiz) {
      navigate(`/quiz/${lessonId}/${thisLesson.quiz.questions[0]._id}`);
    } else {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    let prevChapterNumber = thisChapter.number - 1;
    let nextChapterNumber = thisChapter.number + 1;
    let nextChapter = thisLesson.chapters.filter(
      (chapter) => chapter.number === nextChapterNumber
    );
    if (prevChapterNumber == 0) {
      setShowPrev(false);
    } else {
      setShowPrev(true);
    }
    if (nextChapter.length === 0) {
      setShowNext(false);
      setShowGoQuiz(true);
    } else {
      setShowNext(true);
      setShowGoQuiz(false);
    }
  }, [chapterId]);

  const showQuestions = (chapter) => {
    if (chapter.questions[0]) {
      return chapter.questions.map((question) => {
        if (question.tags == "dropDown") {
          if (question.answers_1[0]) {
            return (
              // rendering the text of each question inside chapter + answers (Drop Down)
              <div className="ddContainer">
                <p className="ddText">{question.text[0]}</p>
                <form
                  className="ddForm"
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (
                      question.answers[question.correctAnswer] ==
                        selectedAnswer &&
                      question.answers_1[question.correctAnswer_1] ==
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
                    className="ddSelect"
                    id="questionDropDown"
                    name="questionDropDown"
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  >
                    {question.answers.map((answer) => {
                      return (
                        <option className="ddOption" value={answer}>
                          {answer}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="ddSelect"
                    id="questionDropDown_1"
                    name="questionDropDown_1"
                    onChange={(e) => setSelectedAnswer_1(e.target.value)}
                  >
                    {question.answers_1.map((answer_1) => {
                      return (
                        <option className="ddOption" value={answer_1}>
                          {answer_1}
                        </option>
                      );
                    })}
                  </select>
                  <input
                    className="ddBtn"
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
          } else {
            return (
              <form className="ddForm">
                <select
                  className="ddSelect"
                  id="questionDropDown"
                  name="questionDropDown"
                >
                  {question.answers.map((answer) => {
                    return (
                      <option className="ddOption" value={answer}>
                        {answer}
                      </option>
                    );
                  })}
                </select>
              </form>
            );
          }
        } else {
          // if tags === "MultipleChoice"
          return (
            <div className="mcContainer">
              <p className="mcText">{question.text[0]}</p>
              <form
                className="mcForm"
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
                    <label className="mcLabel">
                      {answer}
                      <input
                        className="mcInput"
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
                  className="mcBtn"
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
      });
    }
  };

  return (
    <div className="courseContainer">
      <div className="listContainer">
        <List lessonId={lessonId} chapterId={chapterId} />
      </div>
      <div className="chapterContainer">
        {showTitle(thisChapter)}

        {/* SHOW TEXT */}
        <div className="chapterText">
          {thisChapter.text[0] &&
            thisChapter.text.map((paragraph) => (
              <p dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
        </div>
        {thisChapter.audioText &&
          thisChapter.audioText.map((paragraph) => {
            return <p className="audioText">{paragraph}</p>;
          })}
        {showAudio(thisChapter)}
        {showTable(thisChapter)}

        {/* SHOW TEXT_1 */}
        {thisChapter.text_1[0] &&
          thisChapter.text_1.map((paragraph) => (
            <p
              className="chapterText"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

        {showTable_1(thisChapter)}
        {showVideo(thisChapter)}
        {showQuestionText(thisChapter)}
        {showQuestions(thisChapter)}
        {showImg(thisChapter)}
        {showAlignmentText(thisChapter)}
        {showAlignment(thisChapter)}
        {showFootnotes(thisChapter)}
        <div className="btnContainer">
          {/* PREV/NEXT BUTTONS   */}
          <button
            className="ChapPrevBtn"
            style={showPrev ? { display: "inline" } : { display: "none" }}
            onClick={handlePrev}
          >
            PREVIOUS
          </button>
          <button
            className="chapNextBtn"
            style={showNext ? { display: "inline" } : { display: "none" }}
            onClick={handleNext}
          >
            NEXT
          </button>
          <button
            className="chapQuizBtn"
            style={showGoQuiz ? { display: "inline" } : { display: "none" }}
            onClick={handleGoQuiz}
          >
            {thisLesson.quiz
              ? "Check your knowledge with a quiz"
              : "Back to dashboard"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
