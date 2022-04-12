import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiContext } from "../LessonsContext";
import "../styles/syllabus.css";
import syllabusImage from "../images/Vase1.jpg";

const Syllabus = ({ lessonId, chapterId }) => {
  const [lessons, setLessons] = useContext(ApiContext);
  return (
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
                        <Link
                          style={
                            chapterId === chapter._id
                              ? { color: "black" }
                              : { color: "green" }
                          }
                          to={`/course/${lesson._id}/${chapter._id}`}
                        >
                          {chapter.title}
                        </Link>
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
      <div className="syllabusImageContainer">
        <img src={syllabusImage} className="syllabusImage" />
      </div>
    </div>
  );
};

export default Syllabus;
