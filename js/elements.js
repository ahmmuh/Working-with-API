//selected login elements with ID to use in login form
const authForm = document.getElementById("authForm");
const loginButton = document.getElementById("loginButton");
const username = document.getElementById("username");
const password = document.getElementById("password");

//select courses elements with className to use them with courses API
const courseListContainer = document.querySelector(".courseList");
const defaultText = document.querySelector(".defaultText");
const courseName = document.querySelector(".courseName");
const school = document.querySelector(".schoolName");
const credit = document.querySelector(".credit");
const startWeek = document.querySelector(".startWeek");
const endWeek = document.querySelector(".endWeek");

// Selected a few elements by className and also created some elements
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
  //exportera login elements till  main
  authForm,
  username,
  password,
  loginButton,
  //exportera course elements till main
  courseListContainer,
  defaultText,
  courseName,
  school,
  credit,
  startWeek,
  endWeek,
  //exportera quiz elements till main
  quizContainer,
  answerElement,
  col,
  ul,
  question,
  correctAnswer,
};
