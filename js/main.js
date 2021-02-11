const authForm = document.getElementById("authForm");

const getAuthInfo = () => {
  fetch("http://webbred2.utb.hb.se/~fewe/api/api.php?data=students")
    .then((res) => res.json())
    .then((data) => {
      if (authForm) {
        authForm.addEventListener("click", function (e) {
          e.preventDefault();
          authenticated(data);
        });
      }
    });
};

getAuthInfo();

const authenticated = (data) => {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  data.forEach((user) => {
    if (
      username.value == user.login.username &&
      password.value == user.login.password
    ) {
      successMessage("Yes, du lyckades logga in");
      location.href = "courses.html";
    } else if (
      username.value != user.login.username ||
      password.value != user.login.password
    ) {
      errorMessage("Du måste skriva rätt");
    }
  });
};

const successMessage = (sMsg) => {
  const msgSuccess = document.querySelector(".successMsg");
  msgSuccess.innerHTML = sMsg;
};

const errorMessage = (errMsg) => {
  const errorMsg = document.querySelector(".errorMsg");
  errorMsg.innerHTML = errMsg;
};

//silverbear462
//trinidad
