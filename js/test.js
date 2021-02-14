const findAnswer = (quizItem, answerElement) => {
  correctAnswer.addEventListener("click", function () {
    if (correctAnswer.innerHTML === quizItem.correct_answer) {
      console.log(quizItem.correct_answer);
      correctList.push(quizItem.correct_answer);
      answerElement.innerHTML = `Du har svarat på ${correctList.length} `;

      console.log(correctList);
    } else {
      console.log("fel");
    }
  });
};
