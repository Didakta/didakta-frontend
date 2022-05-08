const UserResult = ({ userAnswer, question }) => {
  if (
    (userAnswer.userAnswer_1 || userAnswer.userAnswer_1 === "") &&
    userAnswer.score === 0
  ) {
    return (
      <p className="question-result">
        Your answer:{" "}
        <span style={{ color: "#ee4f4fbb" }}>
          {userAnswer.userAnswer + " " + userAnswer.userAnswer_1}
        </span>
        <br />
        Correct answer:{" "}
        <span style={{ color: "#acff2f65" }}>
          {question.answers[question.correctAnswer]}{" "}
          {question.answers_1[question.correctAnswer_1]}
        </span>
      </p>
    );
  } else if (userAnswer.userAnswer_1 && userAnswer.score === 1) {
    return (
      <p className="question-result">
        Your answer:{" "}
        <span style={{ color: "#acff2f65" }}>
          {userAnswer.userAnswer} {userAnswer.userAnswer_1}
        </span>
      </p>
    );
  } else if (!userAnswer.userAnswer_1 && userAnswer.score === 0) {
    return (
      <p className="question-result">
        Your answer:{" "}
        <span style={{ color: "#ee4f4fbb" }}>{userAnswer.userAnswer}</span>
        <br />
        Correct answer:{" "}
        <span style={{ color: "#acff2f65" }}>
          {question.answers[question.correctAnswer]}
        </span>
      </p>
    );
  } else {
    return (
      <p className="question-result">
        Your answer:{" "}
        <span style={{ color: "#acff2f65" }}>{userAnswer.userAnswer}</span>
      </p>
    );
  }
};

export default UserResult;
