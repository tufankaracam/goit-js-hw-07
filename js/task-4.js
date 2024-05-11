const loginFormUI = document.querySelector(".login-form");

loginFormUI.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !loginFormUI.elements["email"].value ||
    !loginFormUI.elements["password"].value
  ) {
    return alert("All form fields must be filled in");
  }

  loginFormUI.reset();
});
