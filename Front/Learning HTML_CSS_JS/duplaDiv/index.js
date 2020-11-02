window.onload = () => {
  var list = document.getElementById("list");
  console.log(list);
};
var cont = 0;
function element() {
  var a = document.getElementById("boxtxt").value;
  console.log(a);

  var div = document.createElement("div");
  var input = document.createElement("input");
  var label = document.createElement("label");

  div.setAttribute("class", "item");
  div.setAttribute("id", cont);

  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "item");

  label.setAttribute("for", "item");
  label.setAttribute("type", "text");
  label.innerHTML = a; //estamos setando lebel para ter o valro de a

  div.appendChild(input);
  div.appendChild(label);

  div.addEventListener("click", detail);

  var list = document.getElementById("list");
  list.appendChild(div);

  cont++;
}

function detail(event) {
  // console.log(event)
  var tar = event.target;
  //var id = tar.getAttribute("id")
  //console.log(id)

  var text = document.createElement("input");
  text.setAttribute("type", "text");

  var but = document.createElement("button");
  but.innerHTML = "press here";

  tar.appendChild(text);
  tar.appendChild(but);
}
