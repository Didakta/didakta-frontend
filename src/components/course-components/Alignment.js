const Alignment = ({ alignment, classprefix }) => {
  return (
    <div className={`${classprefix}-align-ct`}>
      <iframe
        className={`${classprefix}-align`}
        frameBorder="0"
        allowtransparency="true"
        src={alignment}
        title="Ugarit | iAligner"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Alignment;
