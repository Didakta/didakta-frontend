const Audio = ({ audio }) => {
  return (
    <div className="chapter-audio-ct">
      <iframe
        className="chapter-audioplayer"
        width="500"
        height="50"
        src={audio}
        frameBorder="0"
        title="Audio Player"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Audio;
