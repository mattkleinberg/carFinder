var map;
var geocoder;
var lat = 28.602710199999997;
var lng = -81.2030984;

function initialize(lat, lng) {
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(lat, lng);

	var mapOptions = {
	  center: latlng,
	  zoom: 15,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"),
		mapOptions);
		
		codeAddress();
}

function codeAddress() {
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
}

$(window).bind('pageinit', function(){
	initialize(lat, lng);
});