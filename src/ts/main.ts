import { todos } from "./models/todo";

let wrapper = document.getElementById("todo") as HTMLDivElement;

function newTodo() {
  let todo: todos[] = [
    new todos("Handla", false),
    new todos("Skicka post", false),
    new todos("Gymma", false),
  ];
  console.log(todo);
  createHTML(todo);
}

function createHTML(mytodos) {
  localStorage.setItem("todos", JSON.stringify(mytodos));

  for (let i = 0; i < mytodos.length; i++) {
    console.log(mytodos[i]);

    let ul = document.createElement("ul") as HTMLUListElement;
    ul.classList.add("list");
    let li = document.createElement("li") as HTMLLIElement;
    li.classList.add("list--item");

    li.innerHTML = mytodos[i].todo;

    ul.appendChild(li);
    wrapper.appendChild(ul);
  }
}

function addTodo() {
  let todoInput = document.getElementById("addTodo") as HTMLInputElement;
  let addBtn = document.getElementById("todoBtn") as HTMLButtonElement;

  addBtn.addEventListener("click", () => {
    console.log(todoInput.value);
    todoInput.value = "";
  });
}

addTodo();

newTodo();
