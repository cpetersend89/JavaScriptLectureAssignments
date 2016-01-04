"use strict";

//Welcome to JavaScript Assignment

document.write("Christian Petersen");
console.log("I am 26 years old");
alert("Orlando, Florida");

//JavaScript Variables Assignment

var employeePay;
var employeeHours;
var weeklyPay;
employeePay = 22.50;
employeeHours = 37;
weeklyPay = employeePay * employeeHours;

console.log("Employee Pay" + " " + "$" + employeePay);
console.log("Employee Hours" + " " + employeeHours);
console.log("Weekly Pay" + " " + "$" + weeklyPay);

var employeePay2;
employeePay2 = prompt("Employee Pay?");

console.log("Employee Pay" + " " + "$" + employeePay2);

var employeeHours2;
employeeHours2 = prompt("Total Hours");

console.log("Employee Hours" + " " + employeeHours2);
console.log("Weekly Pay" + " " + "$" + employeePay2 * employeeHours2);