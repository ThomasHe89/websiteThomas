function initMap() {   
    // the resulting map is centered around this point!!
    var lat_ctr = 44.790243; 
    var lon_ctr = -51.394095;
    //showMap is the function that displays the map
    showMap(lat_ctr, lon_ctr);

    //listener loads the map when the page is loaded
    map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
  });
}

function showMap(lat_ctr,lon_ctr,lat,lon) {
    //create a lat and lon object
    var myLatLng = new google.maps.LatLng(lat_ctr, lon_ctr);
    //options for the map
    //var myLatLng = new google.maps.LatLng(concerts[0], concerts[1]);
    //var myLatLng = new google.maps.LatLng(testLat,testLng)
    var mapOptions = {
        zoom: 2,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    //this figures out where the map is loaded on the html page
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //create the google pin for the map
    //you can create many of these but each needs its own position object

    var marker;
    var infowindow;

    // this is how to do it using a loop 
    for (i = 0; i < bandNames.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(bandLat[i], bandLng[i]),
            map: map,
            title: bandNames[i] + ' (' + bandLoc[i] + ')'
        });
    }
    
    // here is an example of the former hard-coded version for GY!BE
    /*
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(45.5017, -73.5673),
        map: map,
        title: "Godspeed You! Black Emperor (Montreal, CAN)"
    });
    */
}

function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    map.panTo(latLng);
}