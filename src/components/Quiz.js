import "../styles/quiz.css";
import "../styles/course.css";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../LessonsContext";

import Header from "../components/Header";
import Text from "./course-components/Text";
import Table from "./course-components/Table";
import Alignment from "./course-components/Alignment";
import QuestionTitle from "./quiz-components/QuestionTitle";
import Question from "./quiz-components/Question";

import {
  filterThisLesson,
  filterThisQuestion,
} from "../functions/quizFunctions";

const Quiz = () => {
  // PARAMS & CONTEXT /////////////////
  const { lessonId, questionId } = useParams();
  const [lessons] = useContext(ApiContext);

  // FILTERING CONTEXT FOR QUESTION RELATED DATA /////////////////
  const thisLesson = filterThisLesson(lessons, lessonId);
  const thisQuestion = filterThisQuestion(thisLesson, questionId);

  // AVERAGE CALCULATION /////////////////
  // averageScore.current = (score.current / thisQuiz.questions.length) * 100;
  console.log(thisQuestion);

  return (
    <>
      <Header />
      <div className="quiz-page-ct">
        <div className="quiz-ct">
          {thisQuestion.title !== "" && (
            <QuestionTitle title={thisQuestion.title} />
          )}
          {thisQuestion.text[0] && (
            <Text text={thisQuestion.text} classprefix="question" />
          )}
          {thisQuestion.table[[0]] && (
            <Table table={thisQuestion.table} classprefix="question" />
          )}
          {thisQuestion.text_1[0] && (
            <Text text={thisQuestion.text_1} classprefix="question" />
          )}
          {thisQuestion.alignment && (
            <Alignment
              alignment={thisQuestion.alignment}
              classprefix="question"
            />
          )}
          <Question question={thisQuestion} lesson={thisLesson} />
        </div>
      </div>
    </>
  );
};

export default Quiz;
