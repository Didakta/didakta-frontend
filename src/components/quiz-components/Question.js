import MultipleChoice from "./MultipleChoice";
import DualDropDown from "./DualDropDown";
import SingleDropDown from "./SingleDropDown";

const Question = ({ question, lesson }) => {
  return (
    <>
      {question.tags[0] === "dropDown" ? (
        question.answers_1[0] ? (
          <DualDropDown question={question} lesson={lesson} />
        ) : (
          <SingleDropDown question={question} lesson={lesson} />
        )
      ) : (
        <MultipleChoice question={question} lesson={lesson} />
      )}
    </>
  );
};

export default Question;
