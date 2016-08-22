(function() {
    "use strict";
console.log("HTML connected");
    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (getArea) {
            var getArea;
            getArea = Math.PI * Math.pow(circle.radius, 2);
            // TODO: complete this method
            // hint: area = pi * radius^2

            return getArea; 
            // TODO: return the proper value
            // console.log(getArea);
        },


        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding) {
              var result = Math.round(circle.getArea());
            } else {
                result = circle.getArea();
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + result);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
