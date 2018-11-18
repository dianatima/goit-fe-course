"use strict";

const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";

const wellcome = "Добро пожаловать!";
const cancel = "Отменено пользователем!";
const wrongPassword = "Доступ запрещен, неверный пароль!";
const wrongLogin = "Доступ запрещен, неверный логин!";

const userLogin = prompt("Введите логин!");

if (userLogin === null) {
  alert(cancel);
} else if (userLogin === adminLogin) {
  const userPassword = prompt("Введите пароль!");
  if (userPassword === null) {
    alert("Отменено пользователем!");
  } else if (userPassword === adminPassword) {
    alert(wellcome);
  } else {
    alert(wrongPassword);
  }
} else {
  alert(wrongLogin);
}
