import "../../styles/course.css";

const Text = ({ text, classprefix }) => {
  return (
    <div className={`${classprefix}-text-ct`}>
      {text.map((paragraph, i) => (
        <p
          key={i.toString()}
          className={`${classprefix}-text`}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  );
};

export default Text;
