"use strict";
(function () {
// The following line generates a random number between 0 and 5.
// var luckyNumber = Math.floor(Math.random()* 6)
// Now, suppose there's a promotion in Walmart, If your lucky number is 0 you have no discount, 
// if your lucky number is 1 you'll get a 10% discount, if it's 2, discount is 25%, if it's 3, 35%, 
// if it's 4, 50%, and if it's 5 you'll get all for free!. Write a JS program that logs to the console,
// how much you will have to pay if your receipt is for $60. Every time you reload your page you should see
// a different result. Use a switch statement for this exercise.

var luckyNumber = Math.floor(Math.random()* 6)
var salesAmount = 60
var price1 = 60 - (salesAmount * .10)
var price2 = 60 - (salesAmount * .25)
var price3 = 60 - (salesAmount * .35)
var price4 = 60 - (salesAmount * .50) 
var price5 = 0.00


switch (luckyNumber) {
	case 0:
	 console.log("Sorry, you do not get a discount, Your total is: $" + salesAmount.toFixed(2));
	 break;
	case 1:
	 console.log("You get a 10% discount! Your total is: $" + price1.toFixed(2));
	 break;
	case 2:
	 console.log("You get a 25% discount! Your total is: $" + price2.toFixed(2));
	 break;
	case 3:
	 console.log("You get a 35% discount! Your total is: $" + price3.toFixed(2));
	 break;
	case 4:
	 console.log("You get a 50% discount! Your total is: $" + price4.toFixed(2));
	 break; 
	case 5:
	 console.log("Congratulations! You get everything for free! Your total is: $" + price5.toFixed(2));
	 break;
}
// Suppose you have been assigned a task and you need to convert a number to the name of a month. 
// 1 should be shown as January, 2 as February and so on. Using a switch statement write the JS code 
// that shows the names of the months in the console.

var monthsOfYear = Math.floor(Math.random()* 6)

switch (monthsOfYear) {
	case 1:
	 console.log("January");
	case 2:
	 console.log("February");
	case 3:
	 console.log("March");
	case 4:
	 console.log("April");
	case 5:
	 console.log("May");
	case 6:
	 console.log("June");
	case 7:
	 console.log("July");
	case 8:
	 console.log("August");
	case 9:
	 console.log("Septemeber");
	case 10:
	 console.log("October");
	case 11:
	 console.log("November");
	case 12:
	 console.log("December");
	 break;
}

})();