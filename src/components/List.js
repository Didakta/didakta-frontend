import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiContext } from "../LessonsContext";
import "../styles/list.css";

const Syllabus = ({ lessonId, chapterId }) => {
  const [lessons, setLessons] = useContext(ApiContext);
  return (
    <div className="syllabusContainer">
      <div className="listAndHeaderContainer">
        <h2>Lessons & Chapters</h2>
        {lessons.__html.map((lesson) => {
          return (
            <div className="oneLessonList">
              <div>
                <details>
                  <summary>
                    {lesson.number}. {lesson.title}
                  </summary>
                  {lesson.chapters.map((chapter) => {
                    return (
                      <div>
                        {lesson.number}.{chapter.number}.{" "}
                        <Link
                          style={
                            chapterId === chapter._id
                              ? { color: "green" }
                              : { color: "gray" }
                          }
                          to={`/course/${lesson._id}/${chapter._id}`}
                        >
                          {chapter.title}
                        </Link>
                      </div>
                    );
                  })}
                </details>
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
  );
};

export default Syllabus;
