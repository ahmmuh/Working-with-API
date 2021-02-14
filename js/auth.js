import * as LoginElements from "./elements.js";
import { errorMessage } from "./validator.js";

const getAuthInfo = () => {
  fetch("http://webbred2.utb.hb.se/~fewe/api/api.php?data=students")
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
