import "../styles/quizResult.css";

import { useContext, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ApiContext } from "../LessonsContext";

import QuizTitle from "./quiz-components/QuizTitle";
import QuestionTitle from "./quiz-components/QuestionTitle";
import Alignment from "./course-components/Alignment";
import Header from "./Header";
import Text from "./course-components/Text";
import UserResult from "./quiz-components/UserResult";
import BackToTop from "./BackToTop";
import NotFound from "./NotFound";

import { filterThisLesson } from "../functions/quizFunctions";

const QuizResult = () => {
  const navigate = useNavigate();

  const [lessons] = useContext(ApiContext);
  const score = useRef(
    localStorage.score
      ? Number(localStorage.score)
      : Number(localStorage.scoreOLD)
  );
  const userAnswers = useRef(
    localStorage.useranswers
      ? JSON.parse(localStorage.useranswers)
      : localStorage.userOLDanswers
      ? JSON.parse(localStorage.userOLDanswers)
      : ""
  );
  const { lessonId } = useParams();

  const thisLesson = filterThisLesson(lessons, lessonId);

  const averageScore = (score.current / thisLesson.quiz.questions.length) * 100;

  useEffect(() => {
    userAnswers.current === "" && navigate("/bad-request");
    window.scrollTo({
      top: 0,
    });
  });

  useEffect(() => {
    const useranswers = JSON.stringify(userAnswers.current);

    localStorage.setItem("userOLDanswers", useranswers);
    localStorage.setItem("scoreOLD", score.current);

    localStorage.removeItem("useranswers");
    localStorage.removeItem("score");
  }, []);
  if (!localStorage.usertoken) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <div className="results-ct">
        <div className="results-header">
          {thisLesson.quiz.title !== "" && <QuizTitle lesson={thisLesson} />}
          <h3 className="average">Your average Score is {averageScore}%</h3>
          {averageScore < thisLesson.quiz.minPassingPercentage && (
            <div className="recommendation">
              <p>
                The minimum passing score for this quiz is{" "}
                {thisLesson.quiz.minPassingPercentage}%.
                <br />
                We recommend you to review{" "}
                <Link to={`/course/${thisLesson._id}`}>this lesson</Link> and
                take the quiz again.
              </p>
            </div>
          )}
        </div>
        <div className="result-ct">
          {userAnswers.current !== "" &&
            userAnswers.current.map((userAnswer, i) => {
              const thisQuestion = thisLesson.quiz.questions.filter(
                (question) => question._id === userAnswer.question
              )[0];
              return (
                <div
                  key={i.toString()}
                  className={
                    userAnswer.score === 1 ? "right-ans-ct" : "wrong-ans-ct"
                  }
                >
                  <div className="qNa-ct col-6">
                    {thisQuestion.title !== "" && (
                      <QuestionTitle title={thisQuestion.title} />
                    )}
                    {thisQuestion.text[0] && (
                      <Text text={thisQuestion.text} classprefix="result" />
                    )}
                    <UserResult
                      userAnswer={userAnswer}
                      question={thisQuestion}
                    />
                  </div>
                  <div className="align-ct col-6">
                    {thisQuestion.alignment && (
                      <Alignment
                        alignment={thisQuestion.alignment}
                        classprefix="result"
                      />
                    )}
                  </div>
                </div>
              );
            })}
        </div>
        <div className="results-dash-ct">
          <button
            className="results-dash"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Back to dashboard
          </button>
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default QuizResult;
