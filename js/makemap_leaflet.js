	var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
	  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
	});

	var map = L.map('map_Leaflet').setView([lat_ctr, lon_ctr], 2);
	map.addLayer(layer);
	
	for (i = 0; i < bandName.length; i++) {
        var marker = L.marker([bandLat[i], bandLng[i]]).addTo(map);
        marker.bindPopup(bandName[i].bold() + '<br> (' + bandLoc[i] + ')');
    };
	