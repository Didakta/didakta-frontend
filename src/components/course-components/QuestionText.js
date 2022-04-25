const QuestionText = ({ text }) => {
  return text.map((paragraph, i) => {
    return (
      <div key={i.toString()} className="chapter-text-ct">
        <p className="chapter-text">{paragraph}</p>
      </div>
    );
  });
};

export default QuestionText;
