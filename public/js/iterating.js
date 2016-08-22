(function(){
    "use strict";

var names = ["Hector", "Joey", "Ben", "Dan"];
console.log(names);

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

console.log(names.length);
    // TODO: Create a log statement that will log the number of elements in the names array.

console.log(names [0]);
console.log(names [1]);
console.log(names [2]);
console.log(names [3]);

var element;
for(var i = 0; i < names.length; i += 1){
	element = names[i];
	console.log(element);
	}

names.forEach(function(element, index, array) {
	console.log('The name at index ' + index + ' is ' + element);
});
    // TODO: Create log statements that will print each of the names array elements individually.

    // Challenge 
    // make a new array of the names in reverse order
var namesInReverseOrder = names.reverse();
	console.log(namesInReverseOrder);

var namesInReverseOrder = ["Hector", "Joey", "Ben", "Dan"];
	namesInReverseOrder.reverse();
	console.log(namesInReverseOrder);
	console.log(namesInReverseOrder.length);

var reverse;
for(var i = 0; i < namesInReverseOrder.length; i += 1){
	reverse = namesInReverseOrder[i];
	console.log(reverse);
	}

namesInReverseOrder.forEach(function(element, index, array) {
	console.log('The name at index ' + index + ' is ' + element);
	console.log(element);
});

///// forEach loop classroom 
var shapes = ['square', 'rectangle', 'circle', 'triangle'];
shapes.forEach(function(element, index, array) {
	console.log('The shape at index ' + index + ' is ' + element);
});

})();
