import { quizApi } from "./data.js";
import * as QuizElements from "./elements.js";
let correctList = [];
let wrongList = [];

const getApi = () => {
  fetch(quizApi)
    .then((res) => res.json())
    .then((data) => getQuiz(data));
};

getApi();
// create col and other elements to show quiz data

const getQuiz = (data) => {
  if (data) {
    showQuestions(data);
  }
};

const showQuestions = (data) => {
  // data.forEach((quizItems) => {
  //   const question = document.createElement("h3");
  //   const correctAnswer = document.createElement("li");
  //   question.innerHTML = quizItems.question;
   

  //   QuizElements.col.appendChild(question);
  //    correctAnswer.innerHTML = quizItems.correct_answer;
  //    QuizElements.ul.appendChild(correctAnswer);
  //   QuizElements.col.appendChild(QuizElements.ul);
  //   QuizElements.quizContainer.appendChild(QuizElements.col);
  // });
};

// const showIncorrectQuestions = (quizItem) => {};

export { getQuiz };
