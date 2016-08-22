(function() {
    "use strict";
console.log('JS linked');

var inventory = '/data/inventory.json';
    // TODO: Create an ajax GET request for /data/inventory.json
$.get(inventory).done(function (data) {
	console.log(data);
});
    // TODO: Take the data from inventory.json and append it to the products table
function addInventory (inventory) {
	var content = '';
	inventory.forEach(function (tool) {
		content += '<tr>';
		content += '<td>' + tool.title + '</td>';
		content += '<td>' + tool.quantity + '</td>';
		content += '<td>' +tool.price +'</td>';
		content += '<td>' +tool.categories +'</td>';
		content += '</tr>';
	});
	$('#insertProducts').append(content);
}

$.get(inventory).done(function (inventory) {
	addInventory(inventory);
});
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
})();