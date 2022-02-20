const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];
const saveTodo = localStorage.getItem("todos");

function savedTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  console.log(li);
  todos = todos.filter((todo) => todo.id !== Number(li.id));
  savedTodos();
}
// 투두리스트 전송시
function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;

  // 랜덤으로 id 생성하기
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoInput.value = "";

  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  savedTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = "● " + newTodo.text;

  const button = document.createElement("button");
  button.innerText = "❌";

  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);

  todoList.appendChild(li);
  //   console.log(todo.text, todo.id);
}

todoForm.addEventListener("submit", handleTodoSubmit);

if (saveTodo !== null) {
  const parseSaveTodo = JSON.parse(saveTodo);
  parseSaveTodo.forEach(paintTodo);
}
