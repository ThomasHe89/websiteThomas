	var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
	  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
	});

	var map = L.map('map_Leaflet').setView([lat_ctr, lon_ctr], 2);
	map.addLayer(layer);
	
	for (i = 0; i < bandName.length; i++) {
        var marker = L.marker([bandLat[i], bandLng[i]]).addTo(map);
        marker.bindPopup(bandName[i] + ' (' + bandLoc[i] + ')');
    };
	
	/*
	// add a marker
	myMapData.forEach(function(element){
		var marker = L.marker(element.coord).addTo(map);
	// bind a pop-up to this marker!
	marker.bindPopup("<b>Hello world!</b><br>I am " + element.name);
	});

	for (i = 0; i < bandName.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(bandLat[i], bandLng[i]),
            map: map,
            title: bandName[i] + ' (' + bandLoc[i] + ')'
        });
    }
    
	
	var eastRiver = [40.726885,-73.967063];
	var upperWestSide = [40.786764,-73.946657]; 
	var panOptions = { 
		animate: true,
		duration: 2
		};
	*/