"use strict";

let resort;

const group1 = "Sharm";
const group2 = "Hurgada";
const group3 = "Taba";

const capacity1 = 15;
const capacity2 = 25;
const capacity3 = 6;

const userInput = prompt("Введите число необходимых мест!");
const userInputNum = Number(userInput);

const isValid = Number.isInteger(userInputNum) && userInputNum > 0;

if (userInput === null) {
  alert("Нам очень жаль, приходите еще!");
} else if (isValid) {
  if (capacity2 >= userInputNum) {
    resort = confirm(`Согласны ли Вы быть в группе ${group2}?`);
    if (resort) {
      alert(`Приятного путешествия в группе ${group2}`);
    } else if (capacity1 >= userInputNum) {
      resort = confirm(`Согласны ли Вы быть в группе ${group1}?`);
      if (resort) {
        alert(`Приятного путешествия в группе ${group1}`);
      } else if (capacity3 >= userInputNum) {
        resort = confirm(`Согласны ли Вы быть в группе ${group3}?`);
        if (resort) {
          alert(`Приятного путешествия в группе ${group3}`);
        } else {
          alert("Нам очень жаль, приходите еще!");
        }
      } else {
        alert("Нам очень жаль, приходите еще!");
      }
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else {
    alert("Извините, столько мест нет ни в одной группе!");
  }
} else {
  alert("Ошибка ввода");
}