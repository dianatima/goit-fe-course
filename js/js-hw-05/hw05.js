"use strict";

const getAllNames = users.map(user => user.name);
console.log(getAllNames);

const getUsersByEyeColor = (arr, color) =>
  arr.filter(user => user.eyeColor === color);
console.log(getUsersByEyeColor(users, "blue"));

const getUsersByGender = (arr, gender) =>
  arr.filter(user => user.gender === gender);
console.log(getUsersByGender(users, "male"));

const getInactiveUsers = arr =>
 arr.filter(user => !user.isActive);
console.log(getInactiveUsers(users));

const getUserByEmail = (arr, email) =>
 arr.find(user => user.email === email);
console.log(getUserByEmail(users, "shereeanthony@kog.com"));
console.log(getUserByEmail(users, "elmahead@omatom.com"));

const getUsersWithAge = (arr, min, max) =>
  arr.filter(user => user.age > min && user.age < max);
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

const callback = (acc, user) => acc + user.balance;
const getTotalBalance = arr => arr.reduce(callback, 0);
console.log(getTotalBalance(users));

const getUsersByFriend = (arr, name) =>
  arr.filter(user => user.friends.includes(name)).map(user => user.name);
console.log(getUsersByFriend(users, "Briana Decker"));
console.log(getUsersByFriend(users, "Goldie Gentry"));
