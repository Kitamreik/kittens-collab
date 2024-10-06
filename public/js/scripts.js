var map = L.map('map').setView([39.739, -104.99], 13); //init location, ex. Denver, Colorado

//add tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//adding popups
var popup = L.popup()
    .setLatLng([39.739, -104.99])
    .setContent("This is a popup.")
    .openOn(map);

//dealing with events
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

//Geo API Code
var ip = "8.8.8.8";
    var api_key = process.env.apiKey;
    $(function () {
       $.ajax({
           url: "https://geo.ipify.org/api/v1",
           data: {apiKey: api_key, ipAddress: ip},
           success: function(data) {
               $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
           }
       });
    });

//Doc: https://leafletjs.com/examples/quick-start/
// Tile Layer Attribution: https://operations.osmfoundation.org/policies/tiles/
//Geo API code snippets: https://geo.ipify.org/code-samples