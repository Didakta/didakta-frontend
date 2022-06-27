import "../styles/course.css";

import Header from "./Header";
import TableOfContent from "./TableOfContent";
import BackToTop from "./BackToTop";

import LessonTitle from "./course-components/LessonTitle";
import ChapterTitle from "./course-components/ChapterTitle";
import Text from "./course-components/Text";
import AudioText from "./course-components/AudioText";
import Audio from "./course-components/Audio";
import Table from "./course-components/Table";
import Video from "./course-components/Video";
import AlignmentText from "./course-components/AlignmentText";
import Alignment from "./course-components/Alignment";
import Footnotes from "./course-components/Footnotes";
import Questions from "./course-components/Questions";
import QuestionText from "./course-components/QuestionText";
import Image from "./course-components/Image";
import NotFound from "./NotFound";

import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApiContext } from "../LessonsContext";

const Course = () => {
  const navigate = useNavigate();

  const [goQuiz, setGoQuiz] = useState(false);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const { lessonId } = useParams();
  const [lessons] = useContext(ApiContext);

  const thisLesson = lessons.__html.filter(
    (lesson) => lesson._id === lessonId
  )[0];

  console.log(thisLesson);
  const handlePrev = () => {
    let prevLessonNumber = thisLesson.number - 1;
    let prevLesson = lessons.__html.filter(
      (lesson) => lesson.number === prevLessonNumber
    );
    localStorage.setItem("lessonProgress", prevLesson[0]._id);
    navigate(`/course/${prevLesson[0]._id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  const handleNext = () => {
    let nextLessonNumber = thisLesson.number + 1;
    let nextLesson = lessons.__html.filter(
      (lesson) => lesson.number === nextLessonNumber
    );
    localStorage.setItem("lessonProgress", nextLesson[0]._id);
    navigate(`/course/${nextLesson[0]._id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  const handleGoQuiz = () => {
    thisLesson.quiz
      ? navigate(`/quiz/${lessonId}/${thisLesson.quiz.questions[0]._id}`)
      : navigate("/dashboard");
  };

  useEffect(() => {
    let prevLessonNumber = thisLesson.number - 1;
    prevLessonNumber === 0 ? setShowPrev(false) : setShowPrev(true);

    ///////////////////////////// MUST BE INCREMENTED EACH TIME A LESSEON HAS BEEN ADDED TO SHOW THE NEXT BUTTON  /////////////////////////////
    thisLesson.number < 2 ? setShowNext(true) : setShowNext(false);
    thisLesson.quiz ? setGoQuiz(true) : setGoQuiz(false);
  }, [lessonId]);

  const bgColors = [
    "#491b1b",
    "#15323b",
    "#7a5858",
    "#27342a",
    "#6e7c8b",
    "#491b1b",
    "#15323b",
    "#7a5858",
    "#27342a",
    "#6e7c8b",
    "#491b1b",
    "#15323b",
    "#7a5858",
    "#27342a",
    "#6e7c8b",
    "#491b1b",
    "#15323b",
    "#7a5858",
    "#27342a",
    "#6e7c8b",
    "#491b1b",
    "#15323b",
    "#7a5858",
    "#27342a",
    "#6e7c8b",
    "#491b1b",
    "#15323b",
    "#7a5858",
    "#27342a",
    "#6e7c8b",
  ];

  if (!localStorage.usertoken) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <TableOfContent />
      <div className="crs-ct">
        <div className="crs-lsn-ct">
          <LessonTitle title={thisLesson.title} number={thisLesson.number} />
          {thisLesson.chapters.map((chapter, i) => {
            return (
              <div
                id={chapter._id}
                key={i.toString()}
                style={{
                  backgroundColor: `${bgColors[i]}`,
                }}
                className="chapter-ct"
              >
                {chapter.title && <ChapterTitle title={chapter.title} />}
                {chapter.text[0] !== "" && (
                  <Text text={chapter.text} classprefix="chapter" />
                )}
                {chapter.audio && <Audio audio={chapter.audio} />}
                {chapter.audioText && <AudioText text={chapter.audioText} />}
                {chapter.table[[0]] && (
                  <Table table={chapter.table} classprefix="chapter" />
                )}
                {chapter.text_1[0] && (
                  <Text text={chapter.text_1} classprefix="chapter" />
                )}
                {chapter.table_1[[0]] && (
                  <Table table={chapter.table_1} classprefix="chapter" />
                )}
                {chapter.youtube && <Video video={chapter.youtube} />}
                {chapter.questionText[0] && (
                  <QuestionText text={chapter.questionText} />
                )}
                {chapter.questions[0] && (
                  <Questions questions={chapter.questions} />
                )}
                {chapter.alignmentText && (
                  <AlignmentText text={chapter.alignmentText} />
                )}
                {chapter.alignment && (
                  <Alignment
                    alignment={chapter.alignment}
                    classprefix="chapter"
                  />
                )}
                {chapter.footnotes[0] && (
                  <Footnotes footnotes={chapter.footnotes} />
                )}
                <Image index={i} />
              </div>
            );
          })}
          <div className="lesson-btn-ct">
            <button
              className="lesson-go-quiz-btn"
              style={goQuiz ? { display: "inline" } : { display: "none" }}
              onClick={handleGoQuiz}
            >
              {thisLesson.quiz
                ? "Check your knowledge with a quiz"
                : "Back to dashboard"}
            </button>
            <div className="lesson-prev-next-btn-ct">
              {/* PREV/NEXT BUTTONS   */}

              <button
                className="lesson-prev-btn"
                style={showPrev ? { display: "inline" } : { display: "none" }}
                onClick={handlePrev}
              >
                previous lesson
              </button>

              <button
                className="lesson-next-btn"
                style={showNext ? { display: "inline" } : { display: "none" }}
                onClick={handleNext}
              >
                next lesson
              </button>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default Course;
