import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ApiContext } from "../LessonsContext";
import "../styles/courselist.css";

export const OneList = ({ index, lesson }) => {
  const [collBlock, setCollBlock] = useState({
    display: "none",
    visibility: "hidden",
  });

  return (
    <div key={index.toString()} className="cl-content">
      <button
        type="button"
        className="cl-collapsible"
        onClick={() =>
          collBlock.display === "none"
            ? setCollBlock({
                display: "block",
                visibility: "visible",
              })
            : setCollBlock({
                display: "none",
                visibility: "hidden",
              })
        }
      >
        Lesson {lesson.number}: {lesson.title}
      </button>
      <div className="cl-chapters" style={collBlock}>
        {lesson.chapters.map((chapter, i2) => {
          return (
            <div key={i2.toString()} className="cl-chapter-link">
              <HashLink
                style={{ display: "flex" }}
                to={`/course/${lesson._id}#${chapter.title}`}
              >
                <span style={{ color: "#d3d3d366" }}>{chapter.number}.</span>
                <span style={{ marginLeft: "5px" }}>{chapter.title}</span>
              </HashLink>
            </div>
          );
        })}
        {lesson.quiz && (
          <div className="cl-chapter-link">
            <Link to={`/quiz/${lesson._id}/${lesson.quiz.questions[0]._id}`}>
              Lesson {lesson.number} Quiz: {lesson.quiz.title}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const CourseList = ({ lessonId }) => {
  const [lessons, setLessons] = useContext(ApiContext);
  const [navOpen, setNavOpen] = useState(0);

  return (
    <>
      <div className="cl-icon-ct">
        <button
          title="Table of content"
          className="cl-icon"
          onClick={() => {
            navOpen === 0 ? setNavOpen(20) : setNavOpen(0);
          }}
        >
          ➽
        </button>
      </div>
      {/* Table of content navigation */}
      <div style={{ width: `${navOpen}vw` }} className="cl-ct">
        <button className="cl-close" onClick={() => setNavOpen(0)}>
          ➽
        </button>
        <div className="cl-content-ct">
          <h2 className="cl-title">Table of content</h2>
          {lessons.__html.map((lesson, i) => {
            return (
              <>
                <OneList index={i} lesson={lesson} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CourseList;
