"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const min = 4;
const max = 16;
const error = "Ошибка! Логин должен быть от 4 до 16 символов";
const success = "Логин успешно добавлен!";
const used = "Такой логин уже используется!";

const userLogin = prompt("Введите логин!");

const isLoginValid = function(login) {
  const isValid = login.length >= min && login.length <= max && login != null;
  return isValid;
};

const isLoginUnique = function(allLogins, login) {
  let hasLogin = false;
  for (const login of allLogins) {
    if (login === userLogin) {
      hasLogin = true;
      break;
    }
  }
  return hasLogin;
};

const addLogin = function(logins, login) {
  if (userLogin === null) {
    return;
  }
  if (isLoginValid(login)) {
    if (!isLoginUnique(logins, login)) {
      logins.push(login);
      alert(success);
      return logins;
    } else {
      return alert(used);
    }
  } else {
    return alert(error);
  }
};

addLogin(logins, userLogin);
