const API_KEY = "25fb8d81842a0cff9db7f220b96729d4";

function onGeoOk(position) {
  // 위도 , 경도
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //   console.log(lat, lon);
  // https://api.openweathermap.org/data/2.5/weather?lat=35.50214&lon=129.4139402&appid=25fb8d81842a0cff9db7f220b96729d4
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather li:first-child");
      const city = document.querySelector("#weather li:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
  );
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
