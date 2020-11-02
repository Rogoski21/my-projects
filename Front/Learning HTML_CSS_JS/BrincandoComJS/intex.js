window.onload = () => {
  var lista = document.getElementById("lista");
};

function gravatf() {
  var grava = document.getElementById("caixatxt").value;
  console.log(grava);
  var div = document.createElement("div");
  var input = document.createElement("input");
  var label = document.createElement("label");

  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "item");

  label.setAttribute("for", "item");

  label.innerHTML = grava;

  div.appendChild(input);
  div.appendChild(label);

  var lista = document.getElementById("lista");
  lista.appendChild(div);
}
