"use strict";
(function () {
// refactored to use a function 
var student = 'Kristy'
var avgGrade = ((70+80+95)/3);
console.log(student + " your average grade is: " + avgGrade.toFixed(1));

function grade(avgGrade, student) {
	if (avgGrade >= 80) {
	console.log(student + ", You're awesome.");
	} else {
	console.log(student + ", You need to practice more.");
	}
	return;
}
grade(avgGrade, student);
// takes in three grades, calculates average, checks average vs. passing grade

/*Knowing that a student's grades are 70, 80, 95. Write a JS program, using conditionals 
that logs to the console "You're awesome" if the average of her grades is greater than 80, 
otherwise the message should be "You need to practice more". */
function shouldBuyHouseorCar() {
	var flipACoin = Math.floor(Math.random()* 2);

	if (flipACoin == 0) {
	console.log("Buy a car!");
	} else {
	console.log("Buy a house!");
	}
	return;
}

shouldBuyHouseorCar ();
shouldBuyHouseorCar ();
shouldBuyHouseorCar ();
/*Suppose your friend Isaac cannot decide between two options. He doesn't know if he should buy a car or 
a new house. Help him decide! Write a small JS program. The following line generates either a 0 or a 1 randomly.
var flipACoin = Math.floor(Math.random()* 2)
Add an if statement to log a "Buy a car" to the console if the result is 0 and "Buy a house" if the result is 1. 
Could this program be written using a ternary operator?*/


// when refactoring existing code into a function
// input - figure out what inputs change and make generally named parameters
// process - we already have the process (in this case)
// output - we already have the output (in this case), but not in a general form 
// name the function after what it does or what it returns
var person = "Cameron";
var salesAmount = 180;
var discount = 0.35;
var finalAmount;

// original exercise refactored to use function ...commented out if else statements 
// are original exercise. 

function displaySaleInfo(person, salesAmount, discount) {
	
    if(salesAmount > 200) {
		finalAmount = salesAmount - (salesAmount * discount);
	 	return person + " purchased $" + salesAmount + " and a discount was was applied. Final amount is: $" + finalAmount.toFixed(2);
    } else {
		finalAmount = salesAmount;
		return person + " purchased $" + salesAmount + " and a discount was not applied. Final amount is: $" + finalAmount.toFixed(2);
  	}
}
// call the function
console.log(displaySaleInfo("Cameron", 180, .35));
console.log(displaySaleInfo("Ryan", 250, .35));
console.log(displaySaleInfo("George", 320, .35));
console.log(displaySaleInfo("Kristy", 300, .35));


// person = "Ryan"
// salesAmount = 250
// // call the function for Ryan

// if(salesAmount > 200) {
// 	finalAmount = salesAmount - (salesAmount * discount);
// 	console.log(person + " purchased $" + salesAmount + " and a discount was was applied. Final amount is: $" + finalAmount.toFixed(2));
// } else {
// 	finalAmount = salesAmount;
// 	console.log(person + " purchased $" + salesAmount + " and a discount was not applied. Final amount is: $" + finalAmount.toFixed(2));
// }

// person = "George"
// salesAmount = 320
// // call the function for George 
// displaySaleInfo(person, salesAmount, discount);

// if(salesAmount > 200) {
// 	finalAmount = salesAmount - (salesAmount * discount);
// 	console.log(person + " purchased $" + salesAmount + " and a discount was was applied. Final amount is: $" + finalAmount.toFixed(2));
// } else {
// 	finalAmount = salesAmount;
// 	console.log(person + " purchased $" + salesAmount + " and a discount was not applied. Final amount is: $" + finalAmount.toFixed(2));
// }
/*HEB has an offer for the clients that buy products amounting more than $200. The discount is 35% off the purchase. 
Write a JS program, using conditionals, that logs to the browser, how much Ryan, Cameron and George need to pay. 
We know that Cameron bought $180, Ryan $250 and George $320. Your program will have to display a line with the name
 of the person, the amount before the discount, if any, and the amount after the discount. 
The output of your code should be similar to the following one:
Luis bought $100.00, no discount was applied. Final payment: $100.00.
Zach bought $220.00, discount was applied. Final payment: $143.00.*/
})();
