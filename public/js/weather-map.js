// (function(){
"use strict";
console.log('JS linked');

const myAPIKey = '9045f328001b8cd61b813c19463bd371'; // created constant for API Key 
var weatherObject; 
var weatherOptions = {
    APPID: myAPIKey,
    q:     "San Antonio, TX",
    units: "imperial"
};

function getWeatherData () {
	$.get("http://api.openweathermap.org/data/2.5/forecast/daily",weatherOptions
		).done(function (data) {
			weatherObject = data;
			console.log(weatherObject);
			addWeather(weatherObject);
			tomorrowWeather(weatherObject);
			thirdDayWeather(weatherObject);
		}).fail(function (xhr, err, msg) {
			alert('Failed to connect!');
	});
}
getWeatherData();

// Function for current weather 
function addWeather (weatherObject) {
	var content = ''; 
		content += '<h4>' + weatherObject.city.name + '</h4>';
		content += '<h3>' + parseInt(weatherObject.list[0].temp.day) + '&deg' + '/' + parseInt(weatherObject.list[0].temp.min) + '&deg' + '</h3>';
		content += '<img src = "http://openweathermap.org/img/w/'+ weatherObject.list[0].weather[0].icon +'.png">';
		content += '<h4>' + 'Wind: ' + weatherObject.list[0].speed + '</h4>';
		content += '<h4>' + 'Humidity: ' + weatherObject.list[0].humidity + '</h4>';
		content += '<h4>' + 'Pressure: ' + weatherObject.list[0].pressure + '</h4>';
		content += weatherObject.list[0].weather[0].description;
	$('#todayWeather').html(content);
};
// Function for second day weather 
function tomorrowWeather (weatherObject) {
	var content = '';
		content += '<h4>' + weatherObject.city.name + '</h4>';
		content += '<h3>' + parseInt(weatherObject.list[1].temp.day) + '&deg' + '/' + parseInt(weatherObject.list[1].temp.min) + '&deg' + '</h3>';
		content += '<img src = "http://openweathermap.org/img/w/'+ weatherObject.list[1].weather[0].icon +'.png">';
		content += '<h4>' + 'Wind: ' + weatherObject.list[1].speed + '</h4>';
		content += '<h4>' + 'Humidity: ' + weatherObject.list[1].humidity + '</h4>';
		content += '<h4>' + 'Pressure: ' + weatherObject.list[1].pressure + '</h4>';
		content += weatherObject.list[1].weather[0].description;
	$('#tomorrowWeather').html(content);
};
// Function for third day weather
function thirdDayWeather (weatherObject) {
	var content = '';
		content += '<h4>' + weatherObject.city.name + '</h4>';
		content += '<h3>' + parseInt(weatherObject.list[2].temp.day) + '&deg' + '/' + parseInt(weatherObject.list[2].temp.min) + '&deg' + '</h3>';
		content += '<img src = "http://openweathermap.org/img/w/'+ weatherObject.list[2].weather[0].icon +'.png">';
		content += '<h4>' + 'Wind: ' + weatherObject.list[2].speed + '</h4>';
		content += '<h4>' + 'Humidity: ' + weatherObject.list[2].humidity + '</h4>';
		content += '<h4>' + 'Pressure: ' + weatherObject.list[2].pressure + '</h4>';
		content += weatherObject.list[2].weather[0].description;
	$('#thirdDayWeather').html(content);
};
// Adding google map
var myLatlng = new google.maps.LatLng(29.426791,-98.489602);
var mapOptions = {
          zoom: 5,
          center: myLatlng
        };

var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

// creating draggable marker for map 
var marker = new google.maps.Marker({
    position: myLatlng,
    draggable: true,
    title: "Move Me!"
});
marker.setMap(map);

// Added event listener to marker to input the latitude and longitude into the lat/lng inputs 
google.maps.event.addListener(marker, 'dragend', function (event) {
    $("#inputLatitude").attr("value", this.getPosition().lat())
    $("#inputLongitude").attr("value", this.getPosition().lng())
});

// Submit function to update weather using the lat/lng inputs 
$('#submit').click (function() {
var inputLatitude = $('#inputLatitude').val();
var inputLongitude = $('#inputLongitude').val();
	weatherOptions.lat = inputLatitude;
	weatherOptions.lon = inputLongitude;
	weatherOptions.q = '';
	getWeatherData();
	
console.log(inputLongitude); //logging inputted longitude
console.log(inputLatitude); //logging inputted latitude
});



// })();	