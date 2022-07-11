import { setSelectionRange } from "@testing-library/user-event/dist/utils";


const updateScore = () => {
    const score = localStorage.score ? JSON.parse(localStorage.score) += 1 : 1
    localStorage.setItem("score", score)


    (localStorage.score && JSON.parse(localStorage.score || 0))+1

    if (localStorage.score) {
            let score = JSON.parse(localStorage.score);
            score++;
            localStorage.setItem("score", score);
          } else {
            localStorage.setItem("score", "1");
          }
}


export const handleSingleDropdownSubmit = (
    question,
    selectedAnswer,
    setCorrection,
    setGoButton,
    setShowNext
  ) => {

    const { answers, correctAnswer, _id: id } = question

    if (answers[correctAnswer] === selectedAnswer) {

      setCorrection("Correct!");
      setGoButton(false);
      setShowNext(true);
    
        updateScore()
    addNewAnswer( { question: id, userAnswer: selectedAnswer, score: 1 });
    } else {
      setCorrection("Incorrect!");
      setGoButton(false);
      setShowNext(true);
      if (!localStorage.score) {
        localStorage.setItem("score", "0");
      }
      addNewAnswer( { question: id, userAnswer: selectedAnswer, score: 0 });
    }
  };

  const setAnswersToStorage = (userAnswers) => {
    localStorage.setItem("useranswers", JSON.stringify(userAnswers));
  }

  const addNewAnswer = (newAnswer) => {
    
    setAnswersToStorage(localStorage.useranswers ? [...userAnswers, newAnswer] : [newAnswer])
  }