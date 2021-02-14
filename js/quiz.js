//http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz

let correctList = [];
let wrongList = [];

const getApi = () => {
  fetch("http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz")
    .then((res) => res.json())
    .then((data) => getQuiz(data));
};

getApi();

// create col and other elements to show quiz data

const getQuiz = (data) => {
  data.forEach((quizItem) => createQuizElements(quizItem));
};

const createQuizElements = (quizItem) => {
  const quizContainer = document.querySelector(".quizList");
  const answerElement = document.querySelector(".answerElement");
  const col = document.createElement("div");
  col.className = "col-4 p-3";
  const ul = document.createElement("ul");
  ul.className = "list-group";
  const question = document.createElement("h5");
  const correctAnswer = document.createElement("li");
  correctAnswer.className = "list-group-item";
  question.innerHTML = quizItem.question;
  correctAnswer.innerHTML = `${quizItem.correct_answer}`;
  col.appendChild(question);
  ul.appendChild(correctAnswer);
  col.appendChild(ul);
  quizContainer.appendChild(col);
  inCorrectAnswers(quizItem, ul);
  correctAnswer.addEventListener("click", function () {
    if (correctAnswer.innerHTML === quizItem.correct_answer) {
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
const inCorrectAnswers = (quizItem, ul) => {
  quizItem.incorrect_answers.forEach((incorr) => incorrentItems(incorr, ul));
};
function incorrentItems(incorr, ul) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = incorr;
  ul.appendChild(li);
  //   console.log(incorr);
}

// check if the user has answered all question and then show message

answeredAllQuestions = (correctList) => {
  if (correctList.length >= 10) {
    alert(`Du har svarat på alla frågor ${correctList.length}, bra jobbat !`);
  }
};

// check if the answer is correct or not and then save it to array

// const findAnswer =(quizItem) =>{
//     if(quizItem.correct_answer){
//         console.log()
//     }
// }
