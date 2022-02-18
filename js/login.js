const $loginForm = document.querySelector("#login-form");
const $loginInput = document.querySelector("#login-form input");
$loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log($loginInput.value);
});
