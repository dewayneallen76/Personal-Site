'use strict';

function sayHello (name) {
    return 'hello ' + name;
} 
console.log(sayHello('zach')); // was not logging sayHello correctly 

// expect to see 'hello zach' in the console

// ----------------------------------------------------------------------------

function sayHelloToEveryoneExceptZach (name) {
    if (name == 'zach') { // added == 
        console.log('goodbye');
    } else {
        console.log('hello ' + name);
    }
}

sayHelloToEveryoneExceptZach('dewayne');

// expect to see 'hello Ryan' in the console

// ----------------------------------------------------------------------------

// returns a random number between 1 and 100
function getRandomNumber () {
    return Math.floor(Math.random() * 100) + 1;
}
// returns true if number is odd, otherwise false
function isOdd (number) {
    return number % 2 === 1;
var rand = isOdd(getRandomNumber());
    if (isOdd(rand)) {
    return rand + 'is odd';
      } else {
    return rand + 'is not odd';
 }
}
console.log(isOdd());
// expect to see '4 is not odd'

// ----------------------------------------------------------------------------

for (var i = 1; i <= 10; i += 1) { // made i <= 10
    console.log(i);
}

// expect to see 1 through 10

// ----------------------------------------------------------------------------

for (var i = 10; i > 0; i -= 1) {
    console.log(i);
}

// expect to see 10 through 1

// ----------------------------------------------------------------------------

function sum(x, y) {
    return x + y;
}
console.log(sum(3, 5));

// expect to see 8

