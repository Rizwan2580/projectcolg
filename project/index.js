const x = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function status() {
  document.getElementById("status").innerHTML = `Divier Status: Not drunk `;
  document.getElementById("status1").innerHTML = `Vehicle Status: No problem `;

}