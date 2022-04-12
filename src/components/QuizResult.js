import "../styles/quizResult.css";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApiContext } from "../LessonsContext";
import { showQuestionAlignment } from "../functions/quizFunctions";

const QuizResult = () => {
  const [lessons, setLessons] = useContext(ApiContext);
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const thisLesson = lessons.__html.filter((lesson) => lesson._id == lessonId);

  const quizResult = JSON.parse(localStorage.userAnswers);

  console.log("thisLesson", thisLesson);
  // console.log("quizResult", quizResult);
  return (
    <div className="resultContainer">
      <h2 className="average">
        Your average Score: {localStorage.averageScore}%
      </h2>
      <div className="recommendation">
        {localStorage.averageScore <
          thisLesson[0].quiz.minPassingPercentage && (
          <p>
            We recommend you to review this lesson and take the quiz again. The
            minimum passing score of this quiz is{" "}
            {thisLesson[0].quiz.minPassingPercentage}%.
          </p>
        )}
      </div>
      <div className="resOneQuestion">
        <h3 className="yourResult">Your results:</h3>
        {quizResult.map((result) => {
          const thisQuestion = thisLesson[0].quiz.questions.filter(
            (question) => question._id == result.question
          )[0];
          return (
            <div className={result.score === 0 ? "wrongAnswer" : "rightAnswer"}>
              <div className="resQText">
                {thisQuestion.text[0] && thisQuestion.text[0]}
              </div>
              {thisQuestion.alignment && showQuestionAlignment(thisQuestion)}
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
  );
};

export default QuizResult;
