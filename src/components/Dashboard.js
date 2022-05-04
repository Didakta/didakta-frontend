import "../styles/dashboard.css";
import Header from "./Header";
import BackToTop from "./BackToTop";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ApiContext } from "../LessonsContext";

const Dashboard = ({ lessonId, chapterId }) => {
  const navigate = useNavigate();
  const [lessons] = useContext(ApiContext);

  const bgColors = [
    "#a7771f",
    "#491b1b",
    "#15323b",
    "#7a5858",
    "#27342a",
    "#6e7c8b",
    "#a7771f",
    "#491b1b",
    "#15323b",
    "#7a5858",
    "#27342a",
    "#6e7c8b",
    "#a7771f",
    "#491b1b",
    "#15323b",
    "#7a5858",
    "#27342a",
    "#6e7c8b",
    "#a7771f",
    "#491b1b",
    "#15323b",
    "#7a5858",
    "#27342a",
    "#6e7c8b",
  ];

  return (
    <>
      <Header />
      <div className="dash-ct">
        <div className="dash-tabs-ct">
          <h1>Homeric Greek course syllabus</h1>
          {lessons.__html.map((lesson, i) => {
            return (
              <div
                onClick={() => {
                  lesson.number < 3
                    ? navigate(`/course/${lesson._id}`)
                    : navigate("");
                }}
                key={i.toString()}
                className="dash-tab-ct"
                style={{ backgroundColor: bgColors[i] }}
              >
                <div className="dash-tab">
                  <h2>Lesson {lesson.number}</h2>
                  <h3
                    style={
                      lesson.number > 2
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    {lesson.title}
                  </h3>
                  <p
                    className="pending"
                    style={
                      lesson.number > 2
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    ⏳ Pending ...
                  </p>
                </div>
              </div>
            );
          })}

          <div className="dash-tab-content-ct">
            <div className="das-tab-content"></div>
          </div>
        </div>
      </div>
      {/* <div className="dashboardContainer">
        <div className="syllabusContainer">
          <div className="listAndHeaderContainer">
            <h2>Lessons & Chapters</h2>
            <div className="listContainer">
              {lessons.__html.map((lesson) => {
                return (
                  <div className="oneLessonList">
                    <div>
                      {lesson.number}. {lesson.title}
                      {lesson.chapters.map((chapter) => {
                        return (
                          <div>
                            {lesson.number}.{chapter.number}.{" "}
                            <HashLink
                              style={
                                chapterId === chapter._id
                                  ? { color: "black" }
                                  : { color: "green" }
                              }
                              to={`/course/${lesson._id}/#${chapter.title}`}
                            >
                              {chapter.title}
                            </HashLink>
                          </div>
                        );
                      })}
                    </div>
                    {lesson.quiz && (
                      <div>
                        {lesson.number}.{" "}
                        <Link
                          style={{ color: "green" }}
                          to={`/quiz/${lesson._id}/${lesson.quiz.questions[0]._id}`}
                        >
                          Quiz: {lesson.quiz.title}
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}
      <BackToTop />
    </>
  );
};

export default Dashboard;
