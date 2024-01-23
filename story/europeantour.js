/* function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
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
]; */


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: new google.maps.LatLng(44.80500, 10.32627),
    mapTypeId: "roadmap",
  });
  
  const iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
  const icons = {
    airport: {
      name: "Airport",
      icon: iconBase + "airports.png",
    },
    poi: {
      name: "Point of Interest",
      icon: iconBase + "poi.png",
    },
    mountain: {
      name: "Mountain",
      icon: iconBase + "mountains.png",
    },
    lodging: {
      name: "Lodging",
      icon: iconBase + "lodging.png",
    },
    restaurant: {
      name: "Restaurant",
      icon: iconBase + "snack_bar.png",
    },
    church: {
      name: "Famous Church",
      icon: iconBase + "church.png",
    },
  };
  const features = [
    {
      position: new google.maps.LatLng(47.45312, 8.56194),
      type: "airport",
    },
    {
      position: new google.maps.LatLng(47.05171, 8.30751),
      type: "poi",
    },
    {
      position: new google.maps.LatLng(47.05674, 8.48580),
      type: "mountain",
    },
    {
      position: new google.maps.LatLng(46.95659, 8.51573),
      type: "lodging",
    },
    {
      position: new google.maps.LatLng(46.00438, 8.95270),
      type: "restaurant",
    },
    {
      position: new google.maps.LatLng(45.43947, 10.99450),
      type: "poi",
    },
    {
      position: new google.maps.LatLng(45.44200, 10.99867),
      type: "poi",
    },
    {
      position: new google.maps.LatLng(45.43799, 12.33590),
      type: "poi",
    },
    {
      position: new google.maps.LatLng(45.45605, 12.35194),
      type: "poi",
    },
    {
      position: new google.maps.LatLng(43.77144, 11.25402),
      type: "lodging",
    },
    {
      position: new google.maps.LatLng(41.90309, 12.45449),
      type: "church",
    },
    {
      position: new google.maps.LatLng(43.07533212532653, 12.605486671068745),
      type: "church",
    },
    {
      position: new google.maps.LatLng(41.79940, 12.59318),
      type: "airport"
    }
  ];

  features.forEach((feature) => {
    new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map,
    });
  });

  const legend = document.getElementById("legend");

  for (const key in icons) {
    const type = icons[key];
    const name = type.name;
    const icon = type.icon;
    const div = document.createElement("div");

    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
  }

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}
  const flightPlanCoordinates = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
}

window.initMap = initMap;
