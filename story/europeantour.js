// I used https://developers.google.com/maps/documentation/javascript/examples/marker-accessibility#maps_marker_accessibility-javascript
// as a template for this map.
// This sets the zoom and focus of the map when the page is opened or refreshed.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 44.697212, lng: 10.63233 },
  });
  // I used https://developers.google.com/maps/documentation/javascript/examples/layer-traffic#maps_layer_traffic-javascript
  // to add a traffic layer, showing major roads to take between locations.
  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
  // Set each location lat/long and the text that pops up when clicking the icon.
  const tourStops = [
    [{ lat: 47.45312, lng: 8.56194 }, "Zurich Airport"],
    [{ lat: 47.05171, lng: 8.30751 }, "Kapellbrücke (Chapel Bridge)"],
    [{ lat: 47.05674, lng: 8.48580 }, "Rigi Mountain Peak"],
    [{ lat: 46.95659, lng: 8.51573 }, "Hotel Engel"],
    [{ lat: 46.00438, lng: 8.95270 }, "Acqua e Farina (Pizzeria)"],
    [{ lat: 45.43947, lng: 10.99450 }, "Arena di Verona"],
    [{ lat: 45.44200, lng: 10.99867 }, "Casa di Giulietta (Shakespeare's Juliet)"],
    [{ lat: 45.43799, lng: 12.33590 }, "Ponte di Rialto (Market on the Grand Canal"],
    [{ lat: 45.45593, lng: 12.35192 }, "Glass-Blowing Factory Tour"],
    [{ lat: 43.77144, lng: 11.25402 }, "Piazza della Repubblica (downtown square with hotel)"],
    [{ lat: 41.90309, lng: 12.45449 }, "Cappella Sistina (Sistine Chapel)"],
    [{ lat: 41.79940, lng: 12.59318 }, "Leonardo da Vinci–Fiumicino Airport"]
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

window.initMap = initMap;
