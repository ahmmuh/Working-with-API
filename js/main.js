// This is my main js file which I imported all my modules and then call several functions to run them
import { fetchCourses } from "./courses.js";
import * as Auth from "./auth.js";
import * as Quiz from "./quiz.js";

Auth.getAuthInfo();
Auth.authenticated();
Auth.findUser();
fetchCourses();

Quiz.getQuiz();
// Quiz.createQuizElements();
// Quiz.answeredAllQuestions();
// Quiz.inCorrectAnswers();
