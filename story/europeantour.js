function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 44.80500, lng: 10.32627 },
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
  { lat: 47.45312, lng: 8.56194},
  { lat: 47.05171, lng: 8.30751}, 
  { lat: 47.05674, lng: 8.48580},
  { lat: 46.95659, lng: 8.51573},
  { lat: 46.00438, lng: 8.95270},
  { lat: 45.43947, lng: 10.99450},
  { lat: 45.44200, lng: 10.99867},
  { lat: 45.43799, lng: 12.33590}, 
  { lat: 45.45605, lng: 12.35194},  
  { lat: 43.77144, lng: 11.25402},
  { lat: 41.90309, lng: 12.45449},
  { lat: 41.79940, lng: 12.59318}
];
