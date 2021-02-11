//http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz

const getApi = () => {
  fetch("http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz")
    .then((res) => res.json())
    .then((data) => getQuiz(data));
};

getApi();

const getQuiz = (data) => {
//   const quizList = document.querySelector(".quizList");
  data.forEach((quiz) => {
    console.log(quiz)
  });
};
