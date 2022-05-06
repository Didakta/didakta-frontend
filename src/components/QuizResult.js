import "../styles/quizResult.css";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApiContext } from "../LessonsContext";

import Alignment from "./course-components/Alignment";
import Header from "./Header";

import {
  filterThisLesson,
  filterThisQuestion,
} from "../functions/quizFunctions";

const QuizResult = () => {
  const [lessons] = useContext(ApiContext);
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const thisLesson = filterThisLesson(lessons, lessonId);
  const thisQuestion = filterThisQuestion(thisLesson, lessonId);
  console.log(thisLesson);
  console.log(thisQuestion);
  const userAnswers = JSON.parse(localStorage.useranswers);
  const score = Number(localStorage.score);
  console.log(score);
  console.log(userAnswers);

  const averageScore = (score / thisLesson.quiz.questions.length) * 100;

  return (
    <>
      <Header />
      <div className="result-ct">
        <h2 className="average">
          Your average Score: {localStorage.averageScore}%
        </h2>
        <div className="recommendation">
          {averageScore < thisLesson.quiz.minPassingPercentage && (
            <p>
              We recommend you to review this lesson and take the quiz again.
              The minimum passing score of this quiz is{" "}
              {thisLesson[0].quiz.minPassingPercentage}%.
            </p>
          )}
        </div>
        <div className="question-result-ct">
          <h3 className="yourResult">Your results:</h3>
          {userAnswers.map((result) => {
            return (
              <div
                className={result.score === 0 ? "wrongAnswer" : "rightAnswer"}
              >
                <div className="resQText">
                  {thisQuestion.text[0] && thisQuestion.text[0]}
                </div>
                {thisQuestion.alignment && (
                  <Alignment
                    alignment={thisQuestion.alignment}
                    classprefix="result"
                  />
                )}
                <div className="ResQRight">
                  {"Right answer: "}
                  {thisQuestion.answers[thisQuestion.correctAnswer]}{" "}
                  {thisQuestion.answers_1 &&
                    thisQuestion.answers_1[thisQuestion.correctAnswer_1]}
                </div>
              </div>
            );
          })}
        </div>
        <button className="backDash" onClick={() => navigate("/dashboard")}>
          Back to dashboard
        </button>
      </div>
    </>
  );
};

export default QuizResult;
