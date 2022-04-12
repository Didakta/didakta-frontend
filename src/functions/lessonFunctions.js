export const showTitle = (chapter) => {
  if (chapter.title) {
    return <h1 className="chapterTitle">{chapter.title}</h1>;
  }
};

export const showTable = (chapter) => {
  if (chapter.table) {
    return (
      <div className="tableContainer">
        <table className="chapterTable">
          {chapter.table.map((row) => {
            return (
              <tr className="chapterTableRow">
                {row.map((e) => {
                  return <td className="chapterTableCell">{e}</td>;
                })}
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
};

export const showTable_1 = (chapter) => {
  if (chapter.table_1) {
    return (
      <table className="chapterTable">
        {chapter.table_1.map((row) => {
          return (
            <tr>
              {row.map((e) => {
                return <td>{e}</td>;
              })}
            </tr>
          );
        })}
      </table>
    );
  }
};

export const showVideo = (chapter) => {
  if (chapter.youtube) {
    return (
      <div className="videoContainer">
        <iframe
          className="videoPlayer"
          width="560"
          height="315"
          src={chapter.youtube}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
};

export const showAudioText = (chapter) => {
  if (chapter.audioText) {
    chapter.audioText.map((paragraph) => {
      return <p className="audioText">{paragraph}</p>;
    });
  }
};

export const showAudio = (chapter) => {
  if (chapter.audio) {
    return (
      <iframe
        className="audioPlayer"
        width="500"
        height="50"
        src={chapter.audio}
        frameborder="0"
        title="Audio Player"
        scrolling="no"
      ></iframe>
    );
  }
};

export const showQuestionText = (chapter) => {
  if (chapter.questionText[0]) {
    return chapter.questionText.map((paragraph) => {
      return <p className="chapterText">{paragraph}</p>;
    });
  }
};

export const showImg = (chapter) => {
  if (chapter.img) {
    return <img className="chapterImg" src={chapter.img} alt="chapterImage" />;
  }
};

export const showAlignmentText = (chapter) => {
  if (chapter.alignmentText[0]) {
    return chapter.alignmentText.map((paragraph) => {
      return <p className="alignmentText">{paragraph}</p>;
    });
  }
};

export const showAlignment = (chapter) => {
  if (chapter.alignment) {
    return (
      <div className="alignmentContainer">
        <iframe
          className="alignment"
          frameBorder="0"
          seamless="seamless"
          allowtransparency="true"
          src={chapter.alignment}
          title="Ugarit | iAligner"
          scrolling="no"
        ></iframe>
      </div>
    );
  }
};

export const showFootnotes = (chapter) => {
  if (chapter.footnotes[0]) {
    return (
      <div className="footnotes">
        <hr className="ruler" />
        {chapter.footnotes.map((footnote) => {
          return <p className="footnote">{footnote}</p>;
        })}
      </div>
    );
  }
};
