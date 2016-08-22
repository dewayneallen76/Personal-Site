"use strict";
(function ()) {

console.log("My js file is connected to my HTML")

var userName = "";

	while (userName === "") {
		userName = prompt("Hi, what is your name?")
	}

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

	alert("Hello," + userName + "!");
	console.log (userName);

// TODO: Show an alert message that welcomes the user based on their input.

var response = confirm("Do you like pizza, " + userName + "?");

	if (response) {
		alert("Awesome, I like pizza too!");
	} else {
		alert("You are not right!");
	}
	console.log(response);
// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
})();