import "../styles/course.css";

import Header from "./Header";
import CourseList from "./CourseList";
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

import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApiContext } from "../LessonsContext";

import { showImg } from "../functions/lessonFunctions";

const Course = () => {
  const [showGoQuiz, setShowGoQuiz] = useState(false);

  const { lessonId } = useParams();
  const [lessons, setLessons] = useContext(ApiContext);
  const navigate = useNavigate();

  const thisLesson = lessons.__html.filter(
    (lesson) => lesson._id === lessonId
  )[0];
  console.log(thisLesson);
  //   (chapter) => chapter._id === chapterId
  // )[0];

  // const [selectedAnswer, setSelectedAnswer] = useState(
  //   thisChapter.questions[0] && thisChapter.questions[0].answers[0]
  // );
  // const [selectedAnswer_1, setSelectedAnswer_1] = useState(
  //   thisChapter.questions[0] && thisChapter.questions[0].answers_1[0]
  // );

  // const handlePrev = () => {
  //   let prevChapterNumber = thisChapter.number - 1;
  //   let prevChapter = thisLesson.chapters.filter(
  //     (chapter) => chapter.number == prevChapterNumber
  //   );
  //   navigate(`/course/${lessonId}/${prevChapter[0]._id}`);
  // };
  // const handleNext = () => {
  //   let nextChapterNumber = thisChapter.number + 1;
  //   let nextChapter = thisLesson.chapters.filter(
  //     (chapter) => chapter.number == nextChapterNumber
  //   );
  //   navigate(`/course/${lessonId}/${nextChapter[0]._id}`);
  // };

  const handleGoQuiz = () => {
    if (thisLesson.quiz) {
      navigate(`/quiz/${lessonId}/${thisLesson.quiz.questions[0]._id}`);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <Header />
      <div className="crs-ct">
        <div className="crs-list-ct">
          <CourseList lessonId={lessonId} />
        </div>
        <div className="crs-lsn-ct">
          <LessonTitle title={thisLesson.title} number={thisLesson.number} />
          {thisLesson.chapters.map((chapter, i) => {
            return (
              <div key={i} className="chapter-ct">
                {/* GIVE IT AN ID LIKE: id={`${chapter._id}`} */}
                {/* id cannot start with a number */}
                {chapter.title && <ChapterTitle title={chapter.title} />}
                {chapter.text[0] && <Text text={chapter.text} />}
                {chapter.audioText && <AudioText text={chapter.audioText} />}
                {chapter.audio && <Audio audio={chapter.audio} />}
                {chapter.table && <Table table={chapter.table} />}
                {chapter.text_1[0] && <Text text={chapter.text_1} />}
                {chapter.table_1 && <Table table={chapter.table_1} />}
                {chapter.youtube && <Video video={chapter.youtube} />}
                {chapter.questionText[0] && (
                  <QuestionText text={chapter.questionText} />
                )}
                <div className="chapter-question-ct">
                  {chapter.questions[0] && (
                    <Questions questions={chapter.questions} />
                  )}
                </div>
                {chapter.alignmentText && (
                  <AlignmentText text={chapter.alignmentText} />
                )}
                {chapter.alignment && (
                  <Alignment alignment={chapter.alignment} />
                )}
                {chapter.footnotes[0] && (
                  <Footnotes footnotes={chapter.footnotes} />
                )}
                {showImg(chapter)}
                {/* CHANGE FUNCTIONALITY TO ONE LESSON PER PAGE INSTEAD OF ONE CHAPTER PER PAGE */}
                <div className="btnContainer">
                  {/* PREV/NEXT BUTTONS   */}
                  {/* <button
                      className="ChapPrevBtn"
                      style={
                        showPrev ? { display: "inline" } : { display: "none" }
                      }
                      onClick={handlePrev}
                    >
                      PREVIOUS
                    </button>
                    <button
                      className="chapNextBtn"
                      style={
                        showNext ? { display: "inline" } : { display: "none" }
                      }
                      onClick={handleNext}
                    >
                      NEXT
                    </button> */}
                  <button
                    className="chapQuizBtn"
                    style={
                      showGoQuiz ? { display: "inline" } : { display: "none" }
                    }
                    onClick={handleGoQuiz}
                  >
                    {thisLesson.quiz
                      ? "Check your knowledge with a quiz"
                      : "Back to dashboard"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default Course;
