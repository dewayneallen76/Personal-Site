"use strict";
console.log("script working");
// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
var books = [
	{
		"bookNumber": 1,
		"title": "Mr. Mercedes",
		"author": {
			"firstName": "Stephen",
			"lastName": "King"
		}
	},
	{	
		"bookNumber": 2,
		"title": "All In",
		"author": {
			"firstName": "Mark",
			"lastName": "Batterson"
		}
	},
	{
		"bookNumber": 3,
		"title": "A Game of Thrones",
		"author": {
			"firstName": "George",
			"lastName": "Martin"
		}
	},
	{
		"bookNumber": 4,
		"title": "Devils in Exile",
		"author": {
			"firstName": "Chuck",
			"lastName": "Hogan"
		}
	},
	{
		"bookNumber": 5,
		"title": "American Gods",
		"author": {
			"firstName": "Neil",
			"lastName": "Gaiman"
		}
	},
	{
		"bookNumber": 6,
		"title": "The Fireman",
		"author": {
			"firstName": "Joe",
			"lastName": "Hill"
		}
	},
	{
		"bookNumber": 7,
		"title": "Heart-Shaped Box",
		"author": {
			"firstName": "Joe",
			"lastName": "Hill"
		}
	},
	{
		"bookNumber": 8,
		"title": "End of Game",
		"author": {
			"firstName": "Stephen",
			"lastName": "King"
		}
	}
];

// log out the books array
console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
books.forEach(function (book, index, array) {
    console.log("Book #" + book.bookNumber);
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    console.log("----------------------------");
});
    
// end loop here