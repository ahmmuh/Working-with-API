//i have created arrow function with parameter msg then picked up element from html page
//this element which i picked up has display property none in my css file but now i changed display to block to show the error message and after 2seconds to hide it again.
const runError = (msg) => {
  const message = document.querySelector(".errMsg");
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 2000);
  message.innerHTML = msg;
};

//export the function
export { runError };
