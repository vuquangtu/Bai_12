let array = [-3, 5, 1, 3, 2, 10];
let max = array[0];
for (i = 1; i < array.length; i++) {
  if (max < array[i]) {
    max = array[i];
    index = i;
  }
}
document.write("gia tri lon nhat la " + max + "vị trí là " + index);
