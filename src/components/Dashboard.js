import "../styles/dashboard.css";
import Header from "./Header";
import BackToTop from "./BackToTop";
import { useContext, useEffect } from "react";
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

  const handleNavigation = (lesson) => {
    localStorage.setItem("lessonProgress", lesson._id);
    navigate(`/course/${localStorage.lessonProgress}`);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

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
                  lesson.number < 3 ? handleNavigation(lesson) : navigate("");
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

      <BackToTop />
    </>
  );
};

export default Dashboard;
