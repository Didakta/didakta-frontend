const Footnotes = ({ footnotes }) => {
  return (
    <div className="chapter-fn-ct">
      <hr className="chapter-fn-ruller" />
      {footnotes.map((footnote, i) => {
        return (
          <p key={i.toString()} className="chapter-fn">
            {footnote}
          </p>
        );
      })}
    </div>
  );
};

export default Footnotes;
