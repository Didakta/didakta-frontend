const Alignment = ({ alignment }) => {
  return (
    <div className="chapter-align-ct">
      <iframe
        className="chapter-align"
        frameBorder="0"
        seamless="seamless"
        allowtransparency="true"
        src={alignment}
        title="Ugarit | iAligner"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Alignment;
