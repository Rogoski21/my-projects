var listElemente = document.querySelector("#app ul");
var inputElement = document.getElementById("input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || []; //estamos dando 2 opções json ou array

function renderTodo() {
  listElemente.innerHTML = "";
  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#"); //estamos dando os atributos de a

    var pos = todos.indexOf(todo);

    linkElement.setAttribute("onclick", "remove(" + pos + ")");

    var linkText = document.createTextNode(" Excluir");

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElemente.appendChild(todoElement);
  }
}

renderTodo();

function addTodo() {
  var text = inputElement.value;
  if (inputElement.value === "") {
    return;
  }

  todos.push(text);

  inputElement.value = "";

  renderTodo();
  save();
}

function remove(pos) {
  todos.splice(pos, 1); //remover na pos 1 item
  renderTodo();
  save();
}

function save() {
  localStorage.setItem("list_todos", JSON.stringify(todos)); //estamos trocando pois local storage n aceita arrayu e vamos usar o json
}
