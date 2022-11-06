// Add console.log to check to see if our code is working.
//console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([33.6213, -100.3790], 4);

let line = [ 
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781],
  [26.5337, -81.7553]
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray:"5, 10"
}).addTo(map);

// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillcolor: '#ffffa1',
   
//  }).addTo(map);



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>', 
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
