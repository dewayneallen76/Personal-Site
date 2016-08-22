"use strict";
console.log('linked');

var navbarLinkElements = document.getElementsByTagName('a');
// console.log(navbarElements);


var delay = 2000;
setTimeout(function() {
	for (var i = 0; i < navbarLinkElements.length; i++){
		var link = "http://mylittlepony.com";
		navbarLinkElements[i].setAttribute("href",link);
	}
}, delay);
	// navbarLinkElements.forEach(function(element){
	// 	console.log(element);
	// });
// });
// 	navbarElements.style.color= 'red';
// }, 



// setTimeout (what's going to happen, after how long)