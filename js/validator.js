const errorMessage = (errMsg) => {
  const errorMsg = document.querySelector(".msg");
  errorMsg.classList.add("errMsg");
  errorMsg.innerHTML = errMsg;
  setTimeout(() => {
    errorMsg.innerHTML = errMsg;
    errorMsg.classList.remove("errMsg");
  }, 1000);
};

export { errorMessage };
