// The following example creates five accessible and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 44.697212, lng: 10.63233 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
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

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
      },
      draggable: true,
      map: map,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

window.initMap = initMap;
