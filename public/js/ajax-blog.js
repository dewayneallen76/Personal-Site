(function(){
"use strict";

console.log('JS linked');

var blog = '/data/blog.json';

$.get(blog).done(function (data) {
	console.log(data);
});

function addBlog(blog) {
	var content = '';
	blog.forEach(function (blog) {
		content += '<h2>';
		content += blog.title;
		content += '</h2>';
		content += '<p>' + blog.content + '</p>';
		content += '<h4>' + 'Category: ' + blog.categories + '</h4>';
		content += '<h4>' + blog.date + '</h4>';
	});
	$('#posts').append(content);
}
$.get(blog).done(function (blog) {
	addBlog(blog);
});


})();	