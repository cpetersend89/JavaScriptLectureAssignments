"use strict";
/*
//Welcome to JavaScript Assignment

document.write("Christian Petersen");
console.log("I am 26 years old");
alert("Orlando, Florida");
*/

/*
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

//Variable Prompt

var employeePay2;
employeePay2 = prompt("Employee Pay?");

console.log("Employee Pay" + " " + "$" + employeePay2);

var employeeHours2;
employeeHours2 = prompt("Total Hours?");

console.log("Employee Hours" + " " + employeeHours2);
console.log("Weekly Pay" + " " + "$" + employeePay2 * employeeHours2);
*/

/*
//JavaScript Variables Assignment Part 2

var overtime;
overtime = 1.5;

var employeePay;
var employee2Pay;
var employeeHours;
var employee2Hours;
var regularPay;
var regularPay2;
var overtimePay;
var overtimePay2;



employeePay = prompt("Enter hourly wage");
employeeHours = prompt("Enter total hours worked");
regularPay = employeePay * employeeHours;
overtimePay = ((40 * employeePay) + (((employeeHours - 40) * employeePay) * overtime));

if (employeeHours <= 40){
	console.log("Employee One Pay" + " " + "$" + employeePay);
	console.log("Employee One Hours" + " " + employeeHours);
	console.log("Employee One Weekly Pay" + " " + "$" + regularPay);
}
else {
	console.log("Employee Two Pay" + " " + "$" + employeePay);
	console.log("Employee Two Hours" + " " + employeeHours);
	console.log("Employee Two Weekly Pay" + " " + "$" + overtimePay);
}

var anotherEmployee;
anotherEmployee = prompt("Another employee 'Y' (yes) 'N' (no)")

if (anotherEmployee === "Y" || anotherEmployee === "y"){
	employee2Pay = prompt("Enter hourly wage");
	employee2Hours = prompt("Enter total hours worked");
	regularPay2 = employee2Pay * employee2Hours;
	overtimePay2 = ((40 * employee2Pay) + (((employee2Hours - 40) * employee2Pay) * overtime));
}
else {
	alert("Thank you, come again!");
}
if (employee2Hours <= 40){
	console.log("Employee Pay" + " " + "$" + employee2Pay);
	console.log("Employee Hours" + " " + employee2Hours);
	console.log("Weekly Pay" + " " + "$" + regularPay2);
}
else {
	console.log("Employee Pay" + " " + "$" + employee2Pay);
	console.log("Employee Hours" + " " + employee2Hours);
	console.log("Weekly Pay" + " " + "$" + overtimePay2);
}
*/

/*
//JavaScript Loop Assignment Part 3

var number = 1;

while (number <= 100) {
	
    if (number % 3 === 0 && number % 5 === 0) {
		console.log("fizzbuzz");
		}

    else if (number % 3 === 0) {
		console.log("fizz");
		}

    else if (number % 5 === 0) {
		console.log("buzz");
	}

    else {
		console.log(number);
	}
	
	number++;
}
*/


//JavaScript Function Assignment Part 4

var payroll;
var overtime;
overtime = 1.5;

function payrollCalc(employeeName, employeePay, employeeHours) {
	employeeName = prompt ("Enter employee name");
	console.log(employeeName);
	employeePay = prompt("Enter employee hourly wage");
	console.log("Hourly wage" + " " + "$" + employeePay);
	employeeHours = prompt("Enter employee hours");
	console.log("Total hours" + " " + employeeHours);
	
if (employeeHours <= 40){
	return employeePay * employeeHours;
}
else {
	return ((40 * employeePay) + (((employeeHours - 40) * employeePay) * overtime));
} 
}

	payroll = prompt("Payroll Entry? 'Y' Yes 'N' No");
while (payroll === "Y" || payroll === "y"){
	console.log(payrollCalc())
	payroll = prompt("Another Employee? 'Y' Yes 'N' No");	
}
