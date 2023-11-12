boad = [];

for (i = 0; i < 6; i++) {
  boad[i] = new Array(0, 0, 0, 0, 0, 0);
}
let data = "";
for (i = 0; i < 6; i++) {
  data = data + "<br>";
  for (j = 0; j < 6; j++) {
    data = data + boad[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  }
}
document.getElementById("carogame").innerHTML = data;

function changeValue() {
  let a = +prompt("moi nhap a=");
  let b = +prompt("moi nhap b =");
  let data2 = "";
  boad[a][b] = "x";
  console.log(boad);
  for (i = 0; i < 6; i++) {
    data2 = data2 + "<br>";
    for (j = 0; j < 6; j++) {
      data2 = data2 + boad[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  }
  document.getElementById("carogame").innerHTML = data2;
}
