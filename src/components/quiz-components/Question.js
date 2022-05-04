import MultipleChoice from "./MultipleChoice";
import DualDropDown from "./DualDropDown";
import SingleDropDown from "./SingleDropDown";

const Question = ({ question, lesson }) => {
  if (question.tags[0] === "dropDown") {
    if (question.answers_1[0]) {
      return <DualDropDown question={question} lesson={lesson} />;
    } else {
      // if tags === "dropDown" && !answers_1
      return <SingleDropDown question={question} lesson={lesson} />;
    }
  } else {
    // if tags === "multipleChoice"
    return <MultipleChoice question={question} lesson={lesson} />;
  }
};

export default Question;
