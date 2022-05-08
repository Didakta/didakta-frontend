import "../styles/quizResult.css";
import { useContext, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ApiContext } from "../LessonsContext";

import QuizTitle from "./quiz-components/QuizTitle";
import QuestionTitle from "./quiz-components/QuestionTitle";
import Alignment from "./course-components/Alignment";
import Header from "./Header";
import Text from "./course-components/Text";
import UserResult from "./quiz-components/UserResult";
import BackToTop from "./BackToTop";

import { filterThisLesson } from "../functions/quizFunctions";

const QuizResult = () => {
  const [lessons] = useContext(ApiContext);
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const userAnswers = JSON.parse(localStorage.useranswers);
  const score = Number(localStorage.score);
  const thisLesson = filterThisLesson(lessons, lessonId);

  const averageScore = (score / thisLesson.quiz.questions.length) * 100;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
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
          {userAnswers.map((userAnswer, i) => {
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
                  <UserResult userAnswer={userAnswer} question={thisQuestion} />
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
            onClick={() => navigate("/dashboard")}
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
