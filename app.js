var mapProp = {
    center: new google.maps.LatLng({lat: 43.856430, lng: 18.413029}),
    zoom: 11,
}

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();

directionsDisplay.setMap(map);

function calculateDistance(){
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    }
    
    directionsService.route(request, function(result, status) {
        if (status === google.maps.DirectionsStatus.OK){
            const output = document.querySelector('#output');
            output.innerHTML = "<div>From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ".<br /> Driving distance: " + result.routes[0].legs[0].distance.text + ".<br />Duration: " + result.routes[0].legs[0].duration.text + ".</div>";
            directionsDisplay.setDirections(result)
        }
        else {
            directionsDisplay.setDirections({routes: []})
            map.setCenter({lat: 43.856430, lng: 18.413029})
            map.setZoom(11)
            output.innerHTML = "<div>Nemoguće izračunati></div>"   
        }
    })
}

function log(){
    
}