
// Global map variable 
var map;

// Where are we?
var claremont = { lat: 34.100629, lng: -117.707591};

/*
 * A function that when called, pushes a location to the database
 */
function addLatLng(event) {
  day1.push(event.latLng);
}
// Initialize map
function initialize() {
  // Determine the options for the map like center and zoom.
  var mapOptions = { center: claremont, zoom: 15 };

  // Create and draw the map in the div with id "map"
  map = new google.maps.Map(document.getElementById('map'),
                            mapOptions);
  /*
   * When the map is clicked, we add a listener.
   * We keep it in the initialize function because
   * we can't add a listener until the map is created,
   * and the map isn't created until we initialize it.
   */
  google.maps.event.addListener(map, 'click', addLatLng);
}

// When the window has finished loading, we initialize the map.
google.maps.event.addDomListener(window, 'load', initialize);



/*
 * Function to draw a marker.
 */
function placeMarker(loc) {
  var marker = new google.maps.Marker({
    position: loc,
    draggable: false
  });  
  marker.setMap(map);
}
