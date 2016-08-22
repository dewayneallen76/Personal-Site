(function(){
    "use strict";

var person = {
	"firstName" : "Dewayne ",
	"lastName" : "Allen",
	"sayHello": function() {
		return ("Hello " + person.firstName + person.lastName + "!");
	  }
};

alert(person.sayHello());
    // TODO: Create person object
    // var person = todo;

    // TODO: Create firstName and lastName properties in your person object; assign your name to them

    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties

    // Say hello from the person object.
    // person.sayHello();
})();
