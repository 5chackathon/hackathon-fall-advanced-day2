// Firebase!
var DB = new Firebase('{{firebase_url}}');

// Define a reference to a field in the database
var day1 = DB.child('day2');

/*
 * A listener for the database such that when a field is added
 * to day1, we find the location and extract it and draw a marker
 * on the map. 
 * Note that when you reload a page, firebase replays all the
 * pushes which is how this works. Also, if you've already loaded
 * a page and a push occurs, we draw a marker as well.
 */
day1.on('child_added', function(snapshot) {
  console.log(snapshot.val())
  var pos = snapshot.val();
  var loc = {lat: pos.k, lng: pos.B};
  placeMarker(loc);
});

