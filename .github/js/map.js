// Replace "YOUR_GOOGLE_MAPS_API_KEY" in map.html with your actual key!
function initMap() {
  const campusCenter = { lat: 37.4275, lng: -122.1697 }; // Example: Stanford
  const map = new google.maps.Map(document.getElementById("map"), {
    center: campusCenter,
    zoom: 16,
    styles: [ /* Eco-friendly map style JSON here if desired */ ]
  });

  // Example bike locations
  const bikes = [
    { id: 1, lat: 37.428, lng: -122.169, status: 'Available' },
    { id: 2, lat: 37.426, lng: -122.167, status: 'Available' }
  ];

  bikes.forEach(bike => {
    const marker = new google.maps.Marker({
      position: { lat: bike.lat, lng: bike.lng },
      map,
      icon: 'assets/icons/bike-pin.png',
      title: `Bike #${bike.id} (${bike.status})`
    });

    marker.addListener("click", () => {
      alert(`Bike #${bike.id}\nStatus: ${bike.status}`);
    });

    // Update bike list
    const list = document.getElementById('bikeList');
    const li = document.createElement('li');
    li.textContent = `Bike #${bike.id}: ${bike.status}`;
    list.appendChild(li);
  });
}
