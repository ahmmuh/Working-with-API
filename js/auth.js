//imported 3 different modules to use them in this module (auth.js)

import * as LoginElements from "./elements.js";
import * as LoginApi from "./data.js";
import { runError } from "./validator.js";

// i have created arrow function and in side this i called fetch method to fetch data from API, after i got the data I checked if my form is not null then added click event, called preventDefault() method to prevent the browser from refreshing and i even call authenticated(data) with data as parameter.

const getAuthInfo = () => {
  fetch(LoginApi.loginApi)
    .then((res) => res.json())
    .then((data) => {
      if (LoginElements.authForm) {
        LoginElements.authForm.addEventListener("click", function (e) {
          e.preventDefault();
          authenticated(data);
        });
      }
    });
};

// i have created arrow function,passed in data as parameter, checked the data and then looped trought the data and called findUse() with parameter user.
const authenticated = (data) => {
  if (data) {
    data.forEach((user) => {
      findUser(user);
    });
  }
};

//i have created arrow function with parameter (user)
// and then checked if the any user, then checked if the input values are the same with login info from the API. if it is then redirect the user to the courses and quiz pages.
//if not, show err message.

const findUser = (user) => {
  if (user) {
    if (
      LoginElements.username.value === user.login.username &&
      LoginElements.password.value === user.login.password
    ) {
      location.href = "courses.html";
    } else if (
      LoginElements.username.value !== user.login.username ||
      LoginElements.password.value !== user.login.password
    ) {
      runError("Skriv rätt");
    }
  }
};

// I exported 3 functions to import in main js file.
export { getAuthInfo, authenticated, findUser };
