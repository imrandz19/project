function Radi(){
    alert("HAHAHAHAHAHAHA");
};

function myMap(){
    var mapProp={
      center:new google.maps.LatLng(43.856430, 18.413029),
      zoom:11,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
function initMap(){

const directionsRenderer = new google.maps.DirectionsRenderer();
const directionsService = new google.maps.DirectionsService();
const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 11,
    center: {lat:43.85, lng:18.41},
})

directionsRenderer.setMap(googleMap);
calculateAndDisplayRoute(directionsService, directionsRenderer);

}

function calculateAndDisplayRoute(directionsService, directionsRenderer){
    // const selectedMode = google.maps.TravelMode.DRIVING,

    directionsService
    .route({
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    })
    .then((response) => {
        directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Direction request failed due to " + status));
}

// function calcRoute(directionsService, directionsRenderer){
//     var request ={
//         origin: document.getElementById("from").value,
//         destination: document.getElementById("to").value,
//         travelMode: google.maps.TravelMode.DRIVING,
//         unitSystem: google.maps.UnitSystem.METRIC
//     }
// }

// directionsService.route(request, (result, status) =>{
//     if (status==google.maps.DirectionsStatus.OK){
//         const output=document.querySelector('#test');
//         output.innerHTML ="<div class='alert-info'> From:" + document.getElementById("from").value + ".<br/>To:" + document.getElementById("to").value + ". <br/> Driving distance" + result.routes[0].legs[0].distance.text + ".<br/>Duration" + result.routes[0].legs[0].duration.text + ".</div>";
    
//         directionsDisplay.setDirections(result);
//     }   else{
//         directionsDisplay.setDirections({routes:[]});
//         map.setCenter(myLatLng);
//         output.innerHTML ="<div class='alert-danger'></i> Could not retrieve driving distance. </div>";
//     }
// });

// var options ={
//     types:['(cities)']
// }

// var input1 = document.getElementById("from");
// var autocomplete1 = new google.maps.places.Autocomplete(input1, options)

// var input2 = document.getElementById("to");
// var autocomplete2 = new google.maps.places.Autocomplete(input2, options)