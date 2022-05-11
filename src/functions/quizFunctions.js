import axios from "axios";
import jwtDecode from "jwt-decode";

export const showQuizText = (quiz) => {
  if (quiz.text) {
    quiz.text.map((paragraph) => {
      return <p className="quizText">{paragraph}</p>;
    });
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

export const findNextQuestionIndex = (lesson, questionId) => {
  return (
    lesson.quiz.questions.findIndex((question) => question._id === questionId) +
    1
  );
};

export const handleDualDropdownSubmit = (
  question,
  selectedAnswer,
  selectedAnswer_1,
  setCorrection,
  setGoButton,
  setShowNext
) => {
  if (
    question.answers[question.correctAnswer] === selectedAnswer &&
    question.answers_1[question.correctAnswer_1] === selectedAnswer_1
  ) {
    setCorrection("Correct!");
    setGoButton(false);
    setShowNext(true);
    if (localStorage.score) {
      let score = JSON.parse(localStorage.score);
      score++;
      localStorage.setItem("score", score);
    } else {
      localStorage.setItem("score", "1");
    }
    if (localStorage.useranswers) {
      const userAnswers = JSON.parse(localStorage.useranswers);
      userAnswers.push({
        question: question._id,
        userAnswer: selectedAnswer,
        userAnswer_1: selectedAnswer_1,
        score: 1,
      });
      localStorage.setItem("useranswers", JSON.stringify(userAnswers));
    } else {
      const userAnswers = [
        {
          question: question._id,
          userAnswer: selectedAnswer,
          userAnswer_1: selectedAnswer_1,
          score: 1,
        },
      ];
      localStorage.setItem("useranswers", JSON.stringify(userAnswers));
    }
  } else {
    setCorrection("Incorrect!");
    setGoButton(false);
    setShowNext(true);
    if (!localStorage.score) {
      localStorage.setItem("score", "0");
    }
    if (localStorage.useranswers) {
      const userAnswers = JSON.parse(localStorage.useranswers);
      userAnswers.push({
        question: question._id,
        userAnswer: selectedAnswer,
        userAnswer_1: selectedAnswer_1,
        score: 0,
      });
      localStorage.setItem("useranswers", JSON.stringify(userAnswers));
    } else {
      const userAnswers = [
        {
          question: question._id,
          userAnswer: selectedAnswer,
          userAnswer_1: selectedAnswer_1,
          score: 0,
        },
      ];
      localStorage.setItem("useranswers", JSON.stringify(userAnswers));
    }
  }
};

export const handleSingleDropdownSubmit = (
  question,
  selectedAnswer,
  setCorrection,
  setGoButton,
  setShowNext
) => {
  if (question.answers[question.correctAnswer] === selectedAnswer) {
    setCorrection("Correct!");
    setGoButton(false);
    setShowNext(true);
    if (localStorage.score) {
      let score = JSON.parse(localStorage.score);
      score++;
      localStorage.setItem("score", score);
    } else {
      localStorage.setItem("score", "1");
    }
    if (localStorage.useranswers) {
      const userAnswers = JSON.parse(localStorage.useranswers);
      userAnswers.push({
        question: question._id,
        userAnswer: selectedAnswer,
        score: 1,
      });
      localStorage.setItem("useranswers", JSON.stringify(userAnswers));
    } else {
      const userAnswers = [
        {
          question: question._id,
          userAnswer: selectedAnswer,
          score: 1,
        },
      ];
      localStorage.setItem("useranswers", JSON.stringify(userAnswers));
    }
  } else {
    setCorrection("Incorrect!");
    setGoButton(false);
    setShowNext(true);
    if (!localStorage.score) {
      localStorage.setItem("score", "0");
    }
    if (localStorage.useranswers) {
      const userAnswers = JSON.parse(localStorage.useranswers);
      userAnswers.push({
        question: question._id,
        userAnswer: selectedAnswer,
        score: 0,
      });
      localStorage.setItem("useranswers", JSON.stringify(userAnswers));
    } else {
      const userAnswers = [
        {
          question: question._id,
          userAnswer: selectedAnswer,
          score: 0,
        },
      ];
      localStorage.setItem("useranswers", JSON.stringify(userAnswers));
    }
  }
};

export const handleMultipleChoiceSubmit = (
  question,
  chosen,
  setCorrection,
  setGoButton,
  setShowNext
) => {
  if (question.answers[question.correctAnswer] === chosen) {
    setCorrection("Correct!");
    setGoButton(false);
    setShowNext(true);
    if (localStorage.score) {
      let score = JSON.parse(localStorage.score);
      score++;
      localStorage.setItem("score", score);
    } else {
      localStorage.setItem("score", "1");
    }
    if (localStorage.useranswers) {
      const userAnswers = JSON.parse(localStorage.useranswers);
      userAnswers.push({
        question: question._id,
        userAnswer: chosen,
        score: 1,
      });
      localStorage.setItem("useranswers", JSON.stringify(userAnswers));
    } else {
      const userAnswers = [
        {
          question: question._id,
          userAnswer: chosen,
          score: 1,
        },
      ];
      localStorage.setItem("useranswers", JSON.stringify(userAnswers));
    }
  } else {
    setCorrection("Incorrect!");
    setGoButton(false);
    setShowNext(true);
    if (!localStorage.score) {
      localStorage.setItem("score", "0");
    }
    if (localStorage.useranswers) {
      const userAnswers = JSON.parse(localStorage.useranswers);
      userAnswers.push({
        question: question._id,
        userAnswer: chosen,
        score: 0,
      });
      localStorage.setItem("useranswers", JSON.stringify(userAnswers));
    } else {
      const userAnswers = [
        {
          question: question._id,
          userAnswer: chosen,
          score: 0,
        },
      ];
      localStorage.setItem("useranswers", JSON.stringify(userAnswers));
    }
  }
};

export const verifyAnswersInStorageAndSetStates = ({
  questionId,
  setGoButton,
  setShowNext,
  setCorrection,
}) => {
  if (localStorage.useranswers) {
    const userAnswers = JSON.parse(localStorage.useranswers);
    const alreadyDone = userAnswers.filter(
      (answer) => answer.question === questionId
    );
    if (alreadyDone.length === 1) {
      setGoButton(false);
      setShowNext(true);
      setCorrection("");
    } else {
      setGoButton(true);
      setShowNext(false);
      setCorrection("");
    }
  } else {
    setGoButton(true);
    setShowNext(false);
    setCorrection("");
  }
};

export const setStatesIfLastQuestion = ({
  quiz,
  nextQuestionIndex,
  goButton,
  setShowNext,
  setShowFinishQuiz,
}) => {
  if (!quiz.questions[nextQuestionIndex] && goButton === false) {
    setShowNext(false);
    setShowFinishQuiz(true);
  } else {
    setShowFinishQuiz(false);
  }
};

// submitQuiz function is being revoked from Quiz > DualDropDown || MultipleChoice || SingleDropDown. It reads useranswers from localStorage, and sends it to the backend to be sent to the DB.

export const submitQuiz = (navigate, lessonId, quizId) => {
  const userAnswers = JSON.parse(localStorage.useranswers);
  const score = Number((localStorage.score * 100) / userAnswers.length);
  const userToken = localStorage.usertoken;
  const decodedUserData = jwtDecode(userToken);
  axios
    .get(`https://didakta.herokuapp.com/user/${decodedUserData.user._id}`)
    .then((res) => {
      console.log(res.data);
      const thisQuizAlreadyTaken = res.data.data.quizProgress.filter(
        (element) => element.quiz === quizId
      )[0];
      if (thisQuizAlreadyTaken === [] || thisQuizAlreadyTaken === undefined) {
        axios
          .put(
            `https://didakta.herokuapp.com/user/${decodedUserData.user._id}/quiz-progress/update`,
            {
              quizResult: {
                quiz: quizId,
                firstTimeScore: score,
                questionsResult: userAnswers,
              },
            }
          )
          .then((res) => res)
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));

  navigate(`/quiz/result/${lessonId}`);
};
