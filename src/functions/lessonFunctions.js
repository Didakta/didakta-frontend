export const showImg = (chapter) => {
  if (chapter.img) {
    return (
      <div className="chapter-img-ct">
        <img className="chapter-img" src={chapter.img} alt="chapterImage" />
      </div>
    );
  }
};
