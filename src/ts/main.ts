import { todos } from "./models/todo";

let wrapper = document.getElementById("todo") as HTMLDivElement;
let todoInput = document.getElementById("addTodo") as HTMLInputElement;
let addBtn = document.getElementById("todoBtn") as HTMLButtonElement;
let ul = document.createElement("ul") as HTMLUListElement;

let todo: todos[] = JSON.parse(localStorage.getItem("todos") || "[]");

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

    li.innerHTML =
      todos[i].todo + `<span class="fa-solid fa-trash" id="icon"></span>`;
    ul.appendChild(li);
  }
}

function deleteTodo() {
  let trashCan = document.querySelectorAll(".fa-trash");
  trashCan.forEach((remove) => {
    remove.addEventListener("click", () => {
      console.log("hejdå");
    });
  });
}

newTodo();
createHTML();
deleteTodo();
