import "../../styles/course.css";

const LessonTitle = ({ title, number }) => {
  return (
    <div className="lesson-title-ct">
      <h1
        style={{
          backgroundColor: "#302934",
          color: "lightgray",
          padding: "50px 21vw",
        }}
        className="lesson-title"
      >
        Lesson {number}: {title}
      </h1>
    </div>
  );
};

export default LessonTitle;
