const Video = ({ video }) => {
  return (
    <div className="chapter-video-ct">
      <iframe
        className="chapter-videoplayer"
        width="560"
        height="315"
        src={video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
