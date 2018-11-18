"use strict";

let userInput;
let total = 0;
const userNumbers = [];

const notNumber = "Было введено не число, попробуйте еще раз";

do {
  userInput = prompt("Введите число!");
  let numb = Number(userInput);

  if (!Number.isNaN(numb) && userInput != null) {
    userNumbers.push(numb);
  } else if (userInput != null) {
    alert(notNumber);
  }
} while (userInput != null);

for (const value of userNumbers) {
  total += value;
}

if (userNumbers.length > 0) {
  alert(`Общая сумма чисел равна ${total}`);
}
