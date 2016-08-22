(function(){
"use strict";
console.log('javascript linked');

var mapOptions = {
	zoom: 5,

	center: {
		lat: 29.454338,
		lng: -98.471425
	},
	mapTypeId: google.maps.MapTypeId.SATELLITE
};
var map = new google.maps.Map(document.getElementById("my-map"), mapOptions);

// Marker placement
var goodTimeCharlies = { lat: 29.454212, lng: -98.471371 };
var marker = new google.maps.Marker({
	position: goodTimeCharlies,
	animation: google.maps.Animation.DROP,
	map: map
});

// Infowindow //
var infowindow = new google.maps.InfoWindow({
	content: "Good Time Charlies, one of my favorite restuarants"
});

// Zoom set to 10//
var map2 = new google.maps.Map(document.getElementById("my-map2"), mapOptions);
map2.setZoom(10);
var marker2 = new google.maps.Marker({
	position: goodTimeCharlies,
	animation: google.maps.Animation.DROP,
	map: map2
});

// Zoom set to 20 //
var map3 = new google.maps.Map(document.getElementById("my-map3"), mapOptions);
map3.setZoom(20);
var marker3 = new google.maps.Marker({
	position: goodTimeCharlies,
	animation: google.maps.Animation.DROP,
	map: map3
});
infowindow.open(map3, marker3) // Info window placement on third map

// Map: my house using geocoding to get address
var mapOptions = {
	zoom: 15,

	center: {
		lat: 29.410411,
		lng: -98.481623
	},
	mapTypeId: google.maps.MapTypeId.SATELLITE
};
var map4 = new google.maps.Map(document.getElementById("my-map4"), mapOptions);

var hotJoy = "1014 S. Alamo St., San Antonio, TX, 78205";
var geocodehotJoy = new google.maps.Geocoder();

geocodehotJoy.geocode({"address": hotJoy}, function(results, status) {
	
	if (status == google.maps.GeocoderStatus.OK) {
		var marker4 = new google.maps.Marker ({
			position: results[0].geometry.location,
			animation: google.maps.Animation.DROP,
			map: map4
		});
		var infowindow4 = new google.maps.InfoWindow({
			content: "Hot Joy, another of my favorite restuarants"
		});
		marker4.addListener('click', function() {
			infowindow4.open(map4, marker4)
		});
	} else {
		alert("Geocoding HotJoy was not successful - STATUS: " + status);
	}
});

////Marker for my home address, with event listener to open info window when clicked
var home = { lat: 29.410411, lng: -98.481623 };
var homeMarker = new google.maps.Marker({
	position: home,
	animation: google.maps.Animation.DROP,
	map: map4
});
var infowindowHome = new google.maps.InfoWindow({
	content: "My House"
});
homeMarker.addListener('click', function() {
	infowindowHome.open(map4, homeMarker)
});
// 

})();	

