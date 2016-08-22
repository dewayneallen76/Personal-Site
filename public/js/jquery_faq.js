(function(){

"use strict";
console.log('js linked');
// TOGGLES INFORMATION IN DETAILED LIST
$(document).ready(function() {
    $('dt').click(function(event) {
        event.preventDefault();
        $(this).next().fadeToggle();
    });
// CHANGES THE FONT WEIGHT ON THE FIRST ITEM IN EACH LIST
$('ul').each(function() {
	$(this).children('li').first().css('font-weight', 'bold');
	});
// HIDES THE LIST ITEMS WHEN THE LIST ITEMS ARE CLICKED 
$('h3').click(function(event) {
        $(this).next().children('li').slideToggle();
    });

// $('dt').click(function() {
//     $(this).toggle();
//     });

});

})(); 