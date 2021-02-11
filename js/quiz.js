//http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz

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
};
const inCorrectAnswers = (quizItem, ul) => {
  quizItem.incorrect_answers.forEach((incorr) => incorrentItems(incorr, ul));
};
function incorrentItems(incorr, ul) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = incorr;
  ul.appendChild(li);
  console.log(incorr);
}
