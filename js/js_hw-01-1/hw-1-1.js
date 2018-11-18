"use strict";

const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";

const userLogin = prompt("Введите логин!");

if (userLogin === null) {
  alert("Отменено пользователем!");
} else if (userLogin === adminLogin) {
  const userPassword = prompt("Введите пароль!");
  if (userPassword === null) {
    alert("Отменено пользователем!");
  } else if (userPassword === adminPassword) {
    alert("Добро пожаловать");
  } else {
    alert("Доступ запрещен, неверный пароль!");
  }
} else {
  alert("Доступ запрещен, неверный логин!");
}
