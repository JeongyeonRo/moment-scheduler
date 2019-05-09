const API_KEY = "9ac11faeac2c1bbf6006d9a3c444cf77";
const COORDS = "coords";

function getweather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    //latitude: latitude,
    latitude,
    //longitude: longitude
    longitude
  };
  saveCoords(coordsObj);
  getweather(latitude, longitude);
}

function handleGeoError() {
  console.log("geo error");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //getweather
    const parseCoords = JSON.parse(loadedCoords);
    //console.log(parseCoords);
    getweather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
