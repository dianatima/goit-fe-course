"use strict";

let userInput;
let total = 0;
const arr = [];

const notNumber = "Было введено не число, попробуйте еще раз";

do {
  userInput = prompt("Введите число!");
  let numb = Number(userInput);

  if (!Number.isNaN(numb) && userInput != null) {
    arr.push(numb);
  } else if (userInput != null) {
    alert(notNumber);
  }
} while (userInput != null);

console.log(arr);

for (const value of arr) {
  total += value;
}
console.log(total);

if (arr.length > 0) {
  alert(`Общая сумма чисел равна ${total}`);
}
