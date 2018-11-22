"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const min = 4;
const max = 16;
const error = "Ошибка! Логин должен быть от 4 до 16 символов";
const success = "Логин успешно добавлен!";
const used = "Такой логин уже используется!";

const userLogin = prompt("Введите логин!");

const isLoginValid = function(login) {
  return login.length >= min && login.length <= max;
};

const isLoginUnique = function(allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function(logins, login) {
  if (login === null) {
    return;
  }
  if (isLoginValid(login)) {
    if (!isLoginUnique(logins, login)) {
      logins.push(login);
      return success;
    } else {
      return used;
    }
  } else {
    return error;
  }
};

addLogin(logins, userLogin);

