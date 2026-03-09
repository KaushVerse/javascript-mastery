let display = document.getElementById("display");

function generateNumber() {
  let random = Math.floor(Math.random() * 1000);

  display.value = random;
}

function resetNumber() {
  display.value = "0";
}
