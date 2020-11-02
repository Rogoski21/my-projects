function validation() {
  var form = document.getElementById("form");
  var email = document.getElementById("email");
  var text = document.getElementById("text");

  var pattern = /^[^ ]+@+[a-z]{3,7}\.[a-z]{2,3}/;

  if (email.value.match(pattern)) {
    c;
    form.classList.add("valid");
    form.classList.remove("Invalid");
  } else {
    form.classList.remove("valid");
    form.classList.add("valid");
  }
}
