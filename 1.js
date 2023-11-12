let array = Array();
let x = 0;

function addnum() {
  array[x] = document.getElementById("addSo").value;
  x++;
  document.getElementById("addSo").value = "";
}
function display() {
  for (i = 0; i <= array.length - 1; i++) {
    document.write(array[i]);
  }
}
