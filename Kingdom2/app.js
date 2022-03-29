// set map options

var mylatlng = { lat: 43.856430, lng: 18.413029};
var mapOptions = {
    center: mylatlng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};


// create Map

var map = new.google.maps.Map(document.getElementById("googleMap"), mapOptions)
