import { todos } from "./models/todo";

let wrapper = document.getElementById("todo") as HTMLDivElement;
let todoInput = document.getElementById("addTodo") as HTMLInputElement;
let addBtn = document.getElementById("todoBtn") as HTMLButtonElement;
let ul = document.createElement("ul") as HTMLUListElement;

let todo: todos[] = [];

function newTodo() {
  addBtn.addEventListener("click", () => {
    let newTodo = new todos(todoInput.value, false);
    todo.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todo));
    ul.innerHTML = "";

    createHTML();

    todoInput.value = " ";
  });
}

function createHTML() {
  let getTodo: any = localStorage.getItem("todos");
  let todos = JSON.parse(getTodo);
  console.log(todos);

  wrapper.appendChild(ul);
  for (let i = 0; i < todos.length; i++) {
    ul.classList.add("list");
    let li = document.createElement("li") as HTMLLIElement;
    li.classList.add("list--item");

    li.innerHTML = todos[i].todo;
    ul.appendChild(li);

    let trashcan = document.createElement("span");
    trashcan.classList.add("fa-solid", "fa-trash");
    li.appendChild(trashcan);

    trashcan.addEventListener("click", () => {
      deleteTodo(todos[i])
    })
  }
}

function deleteTodo(remove) {
  console.log(remove)
}

newTodo();
createHTML();

