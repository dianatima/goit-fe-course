"use strict";

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40
};

function Cashier(name, productDatabase = [], customerMoney = 0) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = customerMoney;
  let totalPrice = 0;
  this.getCustomerMoney = function(value) {
    this.customerMoney = value;
  };
  this.countTotalPrice = function(order) {
    for (let item in order) {
      totalPrice += this.productDatabase[item] * order[item];
    }
    return totalPrice;
  };
  this.countChange = function() {
    const change = this.customerMoney - totalPrice;
    return change >= 0 ? change : null;
  };
  this.onSuccess = function() {
    console.log(`Спасибо за покупку, ваша сдача ${this.countChange()}`);
  };
  this.onError = function() {
    console.log("Очень жаль, вам не хватает денег на покупки");
  };
  this.reset = function() {
    this.customerMoney = 0;
  };
}

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

const mango = new Cashier("Mango", products);


console.log(mango.name); 
console.log(mango.productDatabase); 
console.log(mango.customerMoney); 

const totalPrice = mango.countTotalPrice(order);


console.log(totalPrice); 

mango.getCustomerMoney(300);

console.log(mango.customerMoney); 

const change = mango.countChange();

console.log(change); 

if (change !== null) {
  mango.onSuccess(change); 
} else {
  mango.onError();
}

mango.reset();

console.log(mango.customerMoney); 
