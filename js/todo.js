const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(todoInput.value);
});
