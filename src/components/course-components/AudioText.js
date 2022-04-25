const AudioText = ({ text }) => {
  return (
    <div className="chapter-text-ct">
      {text.map((paragraph, i) => {
        return (
          <p key={i.toString()} className="chapter-text">
            {paragraph}
          </p>
        );
      })}
    </div>
  );
};

export default AudioText;
