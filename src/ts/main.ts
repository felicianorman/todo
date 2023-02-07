import { todos } from "./models/todo";

let wrapper = document.getElementById("todo") as HTMLDivElement;
let todoInput = document.getElementById("addTodo") as HTMLInputElement;
let addBtn = document.getElementById("todoBtn") as HTMLButtonElement;

function newTodo() {
  let todo: todos[] = [];

  addBtn.addEventListener("click", () => {
    let newTodo = new todos(todoInput.value, false);
    todo.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todo));
    createHTML();
    todoInput.value = " ";
  });
}

function createHTML() {
  let getTodo: any = localStorage.getItem("todos");
  let todos = JSON.parse(getTodo);

  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);

    let ul = document.createElement("ul") as HTMLUListElement;
    ul.classList.add("list");
    let li = document.createElement("li") as HTMLLIElement;
    li.classList.add("list--item");

    li.innerHTML = todos[i].todo;

    ul.appendChild(li);
    wrapper.appendChild(ul);
  }

}

newTodo();
