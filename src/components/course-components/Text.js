const Text = ({ text }) => {
  return (
    <div className="chapter-text-ct">
      {text.map((paragraph, i) => (
        <p
          key={i}
          className="chapter-text"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  );
};

export default Text;
