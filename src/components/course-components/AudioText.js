const AudioText = ({ text }) => {
  return (
    <div className="chapter-text-ct">
      {text.map((paragraph, i) => {
        return (
          <p key={i} className="chapter-text">
            {paragraph}
          </p>
        );
      })}
    </div>
  );
};

export default AudioText;
