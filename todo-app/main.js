import { Todo, TodoStatus } from "./Todo.js";
const tabs = document.querySelectorAll(".tabs ul li");
const input = document.querySelector(".add-todo input");
const btn = document.querySelector(".add-todo button");
const todoList = document.querySelector(".todos ul");
const deleteAll = document.querySelector(".delete-all");

const todos = JSON.parse(localStorage.getItem("todos")) ?? [];
const todoApp = new Todo(todos);
displayTodos(todos);

function todoItem(todo) {
  const checked = todo.completed ? "checked" : "";
  const cssClass = todo.completed ? "completed" : "";
  const todoEl = ` <li data-id="${todo.id}">
    <input type="checkbox" ${checked}/>
    <p class=${cssClass}>${todo.title}</p>
    <div class="delete-todo">
      <button>X</button>
    </div>
  </li>`;

  return todoEl;
}

function displayTodos(todos) {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const el = todoItem(todo);
    todoList.insertAdjacentHTML("beforeend", el);
  });

  updateTodo();
  deleteTodo();
}

function addTodo() {
  const title = input.value?.trim();
  if (!title) return;
  input.value = "";
  todoApp.addTodo(title);
  displayTodos(todoApp.getTodos());
  localStorage.setItem("todos", JSON.stringify(todoApp.getTodos()));
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  addTodo();
});

function updateTodo() {
  todoList.querySelectorAll("li").forEach((el) => {
    el.querySelector("input").addEventListener("change", () => {
      const id = el.getAttribute("data-id");
      todoApp.updateTodo(id);
      localStorage.setItem("todos", JSON.stringify(todoApp.getTodos()));
      displayTodos(todoApp.getTodos());
    });

    el.querySelector("p").addEventListener("click", () => {
      const id = el.getAttribute("data-id");
      todoApp.updateTodo(id);
      localStorage.setItem("todos", JSON.stringify(todoApp.getTodos()));
      displayTodos(todoApp.getTodos());
    });
  });
}

function deleteTodo() {
  todoList.querySelectorAll("li").forEach((el) => {
    el.querySelector("button").addEventListener("click", () => {
      const id = el.getAttribute("data-id");
      todoApp.deleteTodo(id);
      localStorage.setItem("todos", JSON.stringify(todoApp.getTodos()));
      displayTodos(todoApp.getTodos());
    });
  });
}

deleteAll.addEventListener("click", () => {
  todoApp.deleteAll();
  localStorage.removeItem("todos");
  displayTodos([]);
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
    const selectedTab = tab.innerText?.toUpperCase();
    const selected = TodoStatus[selectedTab] ?? TodoStatus.ALL;
    displayTodos(todoApp.getTodos(selected));
  });
});
