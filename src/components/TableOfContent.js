import { useContext, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { ApiContext } from "../LessonsContext";
import "../styles/table-of-content.css";

const TableOfContent = () => {
  const [lessons] = useContext(ApiContext);
  const [navOpen, setNavOpen] = useState(0);
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const thisLesson = lessons.__html.filter(
    (lesson) => lesson._id === lessonId
  )[0];

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
      <div style={{ width: `${navOpen}vw` }} className="cl-ct">
        <button className="cl-close" onClick={() => setNavOpen(0)}>
          ➽
        </button>
        <div className="cl-content-ct">
          <h2 className="cl-title">Table of content</h2>
          <div className="cl-chapters">
            <h4>
              Lesson {thisLesson.number}:
              <br />
              {thisLesson.title}
            </h4>
            {thisLesson.chapters.map((chapter, i) => {
              return (
                <div key={i.toString()} className="cl-chapter-link">
                  <NavHashLink
                    style={{ display: "flex" }}
                    to={`#${chapter.title}`}
                  >
                    <span style={{ color: "#d3d3d366" }}>
                      {chapter.number}.
                    </span>
                    <span style={{ marginLeft: "5px" }}>{chapter.title}</span>
                  </NavHashLink>
                </div>
              );
            })}
            {thisLesson.quiz && (
              <div className="cl-chapter-link">
                <Link
                  to={`/quiz/${thisLesson._id}/${thisLesson.quiz.questions[0]._id}`}
                >
                  Lesson {thisLesson.number} Quiz: {thisLesson.quiz.title}
                </Link>
              </div>
            )}
            <button
              className="back-to-dash-btn"
              onClick={() => {
                navigate("/dashboard");
                window.scrollTo({
                  top: 0,
                });
              }}
            >
              Back to dashboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableOfContent;
