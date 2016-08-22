// REFACTORING EXERCISE 
// CHANGED VAR FROM m to map
var map = new google.maps.Map(document.getElementById('my-map'), {
    zoom: 14,

    // position of codeup
    center: {
        lat:  29.426791,
        lng: -98.489602
    }
});
// CORRECTED res to results, CORRECTED stts to status
var geoCode = new google.maps.Geocoder();
geoCode.geocode({ address: 'austin' }, function(results, status) {
    // Check for a successful result
    if (status == google.maps.GeocoderStatus.OK) {
        map.setZoom(4);
        for(var i = 0; i < results.length; i += 1) {
            // CHANGED VAR mar TO marker TO MAKE IT EASIER TO KNOW WHAT IT IS 
            var marker = new google.maps.Marker({
                position: results[i].geometry.location,
                map: map
            });
            // CHANGE VAR iw TO infowindow TO MAKE IT EASIER TO KNOW WHAT IT IS 
            var infowindow = new google.maps.InfoWindow({
                content: results[i].formatted_address
            });
            infowindow.open(map, marker);
        }
    } else {
        // Show an error message with the status if our request fails
        alert("Geocoding was not successful - STATUS: " + status);
    }
});
// CHANGED VARIABLE NAME TO zoomLevel from zl so that we know what it is doing 
document.getElementById('zoom-btn').addEventListener('click', function(e){
    var zoomLevel = document.getElementById('change-zoom').value;
    map.setZoom(parseInt(zoomLevel)); 
});