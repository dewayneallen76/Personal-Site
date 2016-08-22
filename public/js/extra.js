"use strict";
(function() {

var student = {
    "name": "Bob",
    "pizzaPreference": "black olives and mushrooms",
    "grades": {
        "html": [90, 77],
        "css":  [82],
        "js":   [91, 90, 89]
    },
    "languages": [
        "html", "css", "js"
    ],
    "cars": [
        {
            "make":  "honda",
            "model": "civic",
            "parkingPermits": [
                {"name": "Travis Park Garage", "isActive": true},
                {"name": "Apartment Complex",  "isActive": false}
            ]
        },
        {
            "make":  "honda",
            "model": "accord",
            "parkingPermits": []
        }
    ]
};

//   Task                                                        Output
//   ----                                                        ------
// get Bob's name .............................................. 'Bob'
console.log("Students name is: " + student.name);
// get Bob's pizzaPreference ................................... 'black olives and mushrooms'
console.log("Bobs favorite pizza is " + student.pizzaPreference);
// get Bob's 2nd language ...................................... 'css'
console.log("Bobs 2nd language is " + student.languages[1]);
// get Bob's grades for html ................................... [90, 77]
console.log("Bobs grades for html " + student.grades.html);
// get Bob's last grade for javascript ......................... 89
console.log("Bobs last grade for javascript was " + student.grades.js[2]);
// get Bob's first language .................................... 'html'
console.log("Bobs 1st language is " + student.languages[0]);
// get the make of Bob's second car ............................ 'honda'
console.log("Bobs second car is a " + student.cars[1].make);
// number of parking permits for Bob's civic ................... 2
//                           for Bob's accord .................. 0
console.log(student.cars[0].parkingPermits.length);
console.log(student.cars[1].parkingPermits.length);
// find out if Bob's parking permit for travis park is active .. true
console.log(student.cars[0].parkingPermits[0].isActive);
// find the average of Bob's grades for html (your solution should   
// not break if more items are added to the grades.html array)
console.log((student.grades.html[0] + student.grades.html[student.grades.html.length -1]) / 2);
var htmlGrades = student.grades.html;

var total = 0;

htmlGrades.forEach(function(grade) {
	total = total + grade;
});

console.log(student.name + " made the following average grade in HTML: " + (total / htmlGrades.length) + "!");

// function getAverageGrades(arrayOfNumbers) {
// 	var numberOfGrades = arrayOfNumbers.length;
// 	var total = 0;
// 	var average;

// 	arrayOfNumbers.forEach(function(grade) {
// 		total += grade;
// 	});

// 	average = total
// }

})();