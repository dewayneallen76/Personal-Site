"use strict";
//LECTURE NOTES AND EXAMPLES GIVEN IN CLASS
var rollFunnyDie = function() {
	return Math.ceil(Math.random() * 20)
}

var die = {};
die.value = null;
die.numberOfSides = 6;
die.color = "red";
die.rollDie = function() {           //v this keyword refers to numberOfSides value for this object
	return Math.ceil(Math.random() * this.numberOfSides);
  }
};
// THE CODE ABOVE CAN ALSO BE WRITTEN LIKE BELOW:
var die = {
	"pips": null,
	"numberOfSides" : 6,
	"color": "red",
	"rollDie": function {
		this.pips = Math.ceil(Math.random() * this.numberOfSides);
		return this.pips;
	}        // ^ this keyword 
};

// console.log(die);
//output would be:
//Object {value: 1, numberOfSides: 6, color: "red"}
//each of the properties(value, numberOfSides, color) have a value
//die.rollDie will call the function that is built within the object, in 
//this example it will display a random number each time the page is refreshed.

//objects combine state and behavior
//data in an object is a property
//functions in an object are methods
//real world examples: objects represent physical things
// example: a car has four doors that would be a property,
// a car can accelerate would be a method. 

