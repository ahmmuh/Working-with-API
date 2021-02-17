const authForm = document.getElementById("authForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

//courses elements
const courseListContainer = document.querySelector(".courseList");
const defaultText = document.querySelector(".defaultText");
const courseName = document.querySelector(".courseName");
const school = document.querySelector(".schoolName");
const credit = document.querySelector(".credit");
const startWeek = document.querySelector(".startWeek");
const endWeek = document.querySelector(".endWeek");

// quiz elements
const quizContainer = document.querySelector(".quizList");
const answerElement = document.querySelector(".answerElement");
const col = document.createElement("div");
col.className = "col-4";
const ul = document.createElement("ul");
ul.className = "list-group";
const question = document.createElement("h5");
const correctAnswer = document.createElement("li");
correctAnswer.className = "list-group-item";

export {
  //exportera login elements
  authForm,
  username,
  password,
  //exportera course elements
  courseListContainer,
  defaultText,
  courseName,
  school,
  credit,
  startWeek,
  endWeek,
  //exportera quiz elements
  quizContainer,
  answerElement,
  col,
  ul,
  question,
  correctAnswer,
};
