const LessonTitle = ({ title, number }) => {
  return (
    <div className="lesson-title-ct">
      <h1 className="lesson-title">
        Lesson {number}: {title}
      </h1>
    </div>
  );
};

export default LessonTitle;
