const apiKey = "1a8adb1184cf7f91b27308ed9bf070a8";
const cityName = document.querySelector(".text");
const searchBtn = document.querySelector("#btn");
const details = document.querySelector(".fet-details");
cityName.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    getWeather();
  }
});

const getWeather = () => {
  const cityValue = cityName.value;

  if (cityValue.length == 0) {
    details.innerHTML = `<h3>Enter Valid City Name</h3>`;
  } else {
    cityName.value = "";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        details.innerHTML = `
      <span class="city-name">${data.name}</span>
        <span class="clouds">${data.weather[0].main}</span>
        <span class="atmos">${data.weather[0].description}</span>
        <img class= "img-con" src= "https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <span class="deg">${data.main.temp}&deg;</span>
        <div class="min-max">
          <div class="min">
            <p>min</p>
            <p>${data.main.temp_min}&deg;</p>

          </div>
          <div class="max">
            <p>max</p>
            <p>${data.main.temp_max}&deg;</p>
            
          </div>
          `;
      })
      .catch(() => {
        details.innerHTML = `<h3>City not found</h3>`;
      });
  }
};
