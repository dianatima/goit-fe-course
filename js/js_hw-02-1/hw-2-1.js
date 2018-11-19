"use strict";

let userInput;
let total = 0;
const userNumbers = [];

const notNumber = "Было введено не число, попробуйте еще раз";

do {
  userInput = prompt("Введите число!");
  let numb = Number(userInput);

  if (!Number.isNaN(+userInput) && userInput !== null) {
    userNumbers.push(+userInput);
  } else if (userInput != null) {
    alert(notNumber);
  }
} while (userInput != null);

if (userNumbers.length > 0) {
  for (const value of userNumbers) {
    total += value;
  }
  alert(`Общая сумма чисел равна ${total}`);
}
