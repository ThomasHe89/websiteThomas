function initMap() {
    //navigator.geolocation.getCurrentPosition returns the
    //latitude and longitude of wherever the browser is located
    
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        // the resulting map is centered around this point!!
        var lat_ctr = 40.7222889;
        var lon_ctr = -73.957836;
        //showMap is the function that displays the map
        showMap(lat_ctr, lon_ctr,lat,lon);
    });

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
    var image = 'http://downloadicons.net/sites/default/files/small-guitar-icon-60097.png';

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lon),
        map: map,
        title: "You are here!"
    });
       infowindow = new google.maps.InfoWindow({
            content: "You are here!"
        });

        google.maps.event.addListener(marker,'click', function() {
            infowindow.open(map,marker);
        });
        infowindow.open(map,marker);

        // define first marker: Hirsch Effekt (Hannover)
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(52.3667, 9.7167),
            map: map,
            title: "The Hirsch Effekt"
        });
}

function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    map.panTo(latLng);
}