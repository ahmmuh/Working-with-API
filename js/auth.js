import * as LoginElements from "./elements.js";
import { errorMessage } from "./validator.js";
import * as LoginApi from "./data.js";

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

const authenticated = (data) => {
  if (data) {
    data.forEach((user) => {
      findUser(user);
    });
  }
};

const findUser = (user) => {
  if (user) {
    if (
      LoginElements.username.value === user.login.username &&
      LoginElements.password.value === user.login.password
    ) {
      location.href = "courses.html";
    } else if (
      LoginElements.username.value === "" ||
      LoginElements.password.value === ""
    ) {
      errorMessage(
        "Kolla om användarnamn och lösenord är rätt fyllda eller om det är tomt"
      );
    }
  }
};

export { getAuthInfo, authenticated, findUser };
