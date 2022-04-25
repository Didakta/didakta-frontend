const Text = ({ text }) => {
  return (
    <div className="chapter-text-ct">
      {text.map((paragraph, i) => (
        <p
          key={i.toString()}
          className="chapter-text"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  );
};

export default Text;
