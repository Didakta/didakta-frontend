export const showQuizTitle = (quiz) => {
  if (quiz.title) {
    return <h1 className="quizTitle">Quiz: {quiz.title}</h1>;
  }
};

export const showQuizText = (quiz) => {
  if (quiz.text) {
    quiz.text.map((paragraph) => {
      return <p className="quizText">{paragraph}</p>;
    });
  }
};

export const showQuestionTitle = (question) => {
  if (question.title) {
    return <h2 className="questionTitle">{question.title}</h2>;
  }
};

export const showQuestionTable = (question) => {
  if (question.table != []) {
    return (
      <div className="questionTableContainer">
        <table className="questionTable">
          {question.table.map((row) => {
            return (
              <tr className="questionTableRow">
                {row.map((e) => {
                  return <td className="questionTableCell">{e}</td>;
                })}
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
};

export const showQuestionAlignment = (question) => {
  if (question.alignment) {
    return (
      <div className="alignmentContainer">
        <iframe
          className="alignment"
          frameBorder="0"
          seamless="seamless"
          allowtransparency="true"
          src={question.alignment}
          title="Ugarit | iAligner"
          scrolling="no"
        ></iframe>
      </div>
    );
  }
};

export const filterThisLesson = (lessons, lessonId) => {
  const thisLesson = lessons.__html.filter(
    (lesson) => lesson._id === lessonId
  )[0];
  return thisLesson;
};

export const filterThisQuestion = (thisLesson, questionId) => {
  const thisQuestion = thisLesson.quiz.questions.filter(
    (question) => question._id === questionId
  )[0];
  return thisQuestion;
};

export const findNextQuestionIndex = (thisLesson, questionId) => {
  return (
    thisLesson.quiz.questions.findIndex(
      (question) => question._id === questionId
    ) + 1
  );
};

export const handleDualDropdownSubmit = (
  question,
  selectedAnswer,
  selectedAnswer_1,
  setCorrection,
  setGoButton,
  setShowNext,
  score,
  userAnswers
) => {
  if (
    question.answers[question.correctAnswer] == selectedAnswer &&
    question.answers_1[question.correctAnswer_1] == selectedAnswer_1
  ) {
    setCorrection("Correct!");
    setGoButton(false);
    setShowNext(true);
    score.current++;
    userAnswers.current.push({
      question: question._id,
      score: 1,
    });
  } else {
    setCorrection("Incorrect!");
    setGoButton(false);
    setShowNext(true);
    userAnswers.current.push({
      question: question._id,
      score: 0,
    });
  }
  localStorage.setItem("userAnswers", JSON.stringify(userAnswers.current));
};

export const handleSingleDropdownSubmit = (
  question,
  selectedAnswer,
  setCorrection,
  setGoButton,
  setShowNext,
  score,
  userAnswers
) => {
  if (question.answers[question.correctAnswer] == selectedAnswer) {
    setCorrection("Correct!");
    setGoButton(false);
    setShowNext(true);
    score.current++;
    userAnswers.current.push({
      question: question._id,
      score: 1,
    });
  } else {
    setCorrection("Incorrect!");
    setGoButton(false);
    setShowNext(true);
    userAnswers.current.push({
      question: question._id,
      score: 0,
    });
  }
  localStorage.setItem("userAnswers", JSON.stringify(userAnswers.current));
};

export const handleMultipleChoiceSubmit = (
  question,
  chosen,
  setCorrection,
  setGoButton,
  setShowNext,
  score,
  userAnswers
) => {
  if (question.answers[question.correctAnswer] == chosen) {
    setCorrection("Correct!");
    setGoButton(false);
    setShowNext(true);
    score.current++;
    userAnswers.current.push({
      question: question._id,
      score: 1,
    });
  } else {
    setCorrection("Incorrect!");
    setGoButton(false);
    setShowNext(true);
    userAnswers.current.push({
      question: question._id,
      score: 0,
    });
  }
  localStorage.setItem("userAnswers", JSON.stringify(userAnswers.current));
};
