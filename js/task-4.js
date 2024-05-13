const loginFormUI = document.querySelector(".login-form");

loginFormUI.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !loginFormUI.elements["email"].value ||
    !loginFormUI.elements["password"].value
  ) {
    return alert("All form fields must be filled in");
  }

  const formdata = {
    email: loginFormUI.elements.email.value.trim(),
    password: loginFormUI.elements.password.value.trim(),
  };

  console.log(formdata);
  
  loginFormUI.reset();
});
