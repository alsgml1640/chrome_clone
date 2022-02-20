const $loginDiv = document.querySelector("#login_div");
const $loginForm = document.querySelector("#login-form");
const $loginInput = document.querySelector("#login-form input");

const $display = document.querySelector(".display");

const $name = localStorage.getItem("name");

const $greeting = document.querySelector("#greeting");

const $logout = document.querySelector("#logout");

handleDisplay($name);
$logout.addEventListener("click", () => {
  localStorage.removeItem("name");
  $display.classList.add("display-none");
  $loginDiv.classList.remove("display-none");
});

$loginForm.addEventListener("submit", () => {
  const name = $loginInput.value;
  localStorage.setItem("name", name);
  handleDisplay($name);
});

function handleDisplay(name) {
  if (name !== null) {
    //console.log("이름 있을때");
    $greeting.innerHTML = `Hello! ${name}`;
    $display.classList.remove("display-none");
    $loginDiv.classList.add("display-none");
    // console.log($name);
  } else {
    // console.log(1111);
    $display.classList.add("display-none");
    console.log("이름 없을때");
  }
}
