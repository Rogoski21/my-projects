function color() {
  const txt = document.querySelector(".hello"); //capturing the class hello content
  var color = ["red", "blue", "green", "aqua", "chartreuse", "orange"]; // for the rand we created some colors

  const randColor = color[Math.floor(Math.random() * color.length)]; //rand method

  txt.style.color = randColor;
}

function numero() {
  var valor = document.getElementById("caixatxt").value;
  //console.log(valor)
  var para = document.createElement("p"); //criamos o paragrafo

  var container = document.getElementById("container"); //peganod uma div nova ou podemos criar uma div nova

  var cont = 0;
  for (var i = 0; i < valor; i++) {
    const node = document.createTextNode(i + 1 + " ");

    container.appendChild(node);

    cont++;
  }
}
