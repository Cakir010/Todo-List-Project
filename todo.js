//* TÜM ELEMENTLER

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstTodoBody = document.querySelectorAll(".todo-body")[0];
const secondTodoBody = document.querySelectorAll(".todo-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();
function eventListeners() {
  //*Tüm Event Listenerlar
  form.addEventListener("submit", addTodo);
}

function addTodo(e) {
  const newTodo = todoInput.value.trim();

  if (newTodo === "") {
    showAlert("dikkat", "Lütfen bir todo giriniz...");
  } else {
    addTodoToUI(newTodo);
    
    showAlert("good", "Todo Başarıyla Oluşturuldu...");
  }

  e.preventDefault();
}
// =========================================================
// function getTodoFromStorage() {
//   Storageden bütün todoları alacak
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   return todos;
// }
// function addTodoToStorage(newTodo) {
//   let todos = getTodosFromStorage();
//   todos.push(newTodo);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }
// ===================================================
function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `alert ${type}`;
  alert.textContent = message;
  firstTodoBody.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 2000);
}
// ========================================================
function addTodoToUI(newTodo) {
  //*List İtem Olusturma
  const listItem = document.createElement("li");
  //*LİNK Olusturma
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = ' <i  class="fa fa-remove" ></i>';

  listItem.className = "list-group-item d-flex justify-content-between";

  //*TEXT NODE EKLEME
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  //* TODO LİST'E LİST İTEM EKLEME
  todoList.appendChild(listItem);
  todoInput.value = "";
}
