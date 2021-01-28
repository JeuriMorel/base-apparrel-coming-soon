const form = document.getElementById("form");
const message = document.getElementById("message");
const email = document.getElementById("email");
const error = document.getElementById("error");

email.oninput = () => {
  checkError();
};

const checkError = () => {
    email.classList.remove("success");

  if (email.value === "") {
    message.classList.remove("error");
    email.classList.remove("error");
    error.classList.remove("error");
  }
};

const handleSubmit = () => {
  if (!email.value.includes("@")) {
    message.classList.add("error");
    email.classList.add("error");
    error.classList.add("error");
  } else if (email.value.includes("@")) {
      email.classList.add("success");
      message.classList.remove("error");
      email.classList.remove("error");
      error.classList.remove("error");
      email.value = '';
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});
