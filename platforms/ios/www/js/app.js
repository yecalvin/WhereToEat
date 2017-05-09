
$(document).ready(function() {

});

var names = new Array();

$("#submit").click(function () {
    fetchData();
    printData();
});

function fetchData() {

    var tempLocation = new google.maps.LatLng(document.getElementById("lat").innerHTML,document.getElementById("lon").innerHTML);

    var request = {
        location: tempLocation,
        radius: '500',
        types: [document.getElementById("cat").innerHTML]
    };

    var service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch(request, function(results, status){
        for (var i = 0; i < results.length; i++) {

            service.getDetails({placeId: results[i].place_id}, function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    names.push(place.name);
                    console.log(place);
                    /*for (var k = 0; k < 7; k++) {
                     console.log(place.name, place.opening_hours.weekday_text[k]);
                     console.log("ZZZ");
                     }*/
                }
            })
        }
    });

}

function printData() {
    window.location.href = "index2.html";
    console.log(names);
    //document.getElementById("places").innerHTML = names[0];
}