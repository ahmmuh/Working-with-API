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
    data.forEach((quizItem) => createQuizElements(quizItem));
  }
};

const createQuizElements = (quizItem) => {
  if (quizItem) {
    inCorrectAnswers(quizItem, QuizElements.ul);
    getCorrect(quizItem, QuizElements.ul);
    showQuestions(quizItem, QuizElements.col, QuizElements.quizContainer);
  }

  QuizElements.correctAnswer.addEventListener("click", function () {
    if (QuizElements.correctAnswer.innerHTML === quizItem.correct_answer) {
      QuizElements.correctAnswer.innerHTML = quizItem.correct_answer;

      correctAnswer.style.backgroundColor = "green";
      correctAnswer.style.color = "white";
      console.log(quizItem.correct_answer);
      correctList.push(quizItem.correct_answer);
      answerElement.innerHTML = `Du har svarat på ${correctList.length} fråga(or)}`;
      answeredAllQuestions(correctList);
      //   const existed = correctList.find((founded) => {
      //     if (quizItem.correct_answer === founded) {
      //       console.log(existed);
      //     }
      //   });
      console.log(correctList);
    } else {
      console.log("fel");
    }
  });
};
const getCorrect = (quizItem, ul) => {
  // console.log(ul);
};

const showQuestions = (quizItem, col, quizContainer) => {
  const h5 = document.createElement("h5");
  h5.innerHTML = quizItem.question;
  col.appendChild(h5);
  quizContainer.appendChild(col);
  console.log(h5);
};
const inCorrectAnswers = (quizItem, ul) => {
  if (quizItem) {
    quizItem.incorrect_answers.forEach((incorr) => incorrentItems(incorr, ul));
  }
};
function incorrentItems(incorr, ul) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = incorr;
  ul.appendChild(li);
  //   console.log(incorr);
}

// check if the user has answered all question and then show message

const answeredAllQuestions = (correctList) => {
  if (correctList) {
    console.log(correctList);
    if (correctList.length >= 10) {
      alert(`Du har svarat på alla frågor ${correctList.length}, bra jobbat !`);
    }
  }
};

export { getQuiz, createQuizElements, inCorrectAnswers, answeredAllQuestions };
