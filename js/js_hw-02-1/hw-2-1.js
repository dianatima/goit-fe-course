"use strict";

let userInput;
let total = 0;
let inRange = false;
const arr = [];

do {
  userInput = prompt("Введите число!");
  let numb = Number(userInput);
  inRange = Number.isNaN(numb);

  if (!inRange) {
    arr.push(numb);
  } else {
    alert("Было введено не число, попробуйте еще раз");
  }
} while (userInput != null);

console.log(arr);

for (const value of arr) {
  total = total + value;
}
console.log(total);

if (arr.length > 0) {
  alert(`Общая сумма чисел равна ${total}`);
}
