var atlantatemp
var atlantawindspeed
var atlantaweathercode
var atlanta = {}
// var atlanta={
//     "latitude": 33.759865,
//     "longitude": -84.39587,
//     "generationtime_ms": 0.05793571472167969,
//     "utc_offset_seconds": 0,
//     "timezone": "GMT",
//     "timezone_abbreviation": "GMT",
//     "elevation": 317,
//     "current_weather_units": {
//         "time": "iso8601",
//         "interval": "seconds",
//         "temperature": "°F",
//         "windspeed": "km/h",
//         "winddirection": "°",
//         "is_day": "",
//         "weathercode": "wmo code"
//     },
//     "current_weather": {
//         "time": "2025-08-28T01:15",
//         "interval": 900,
//         "temperature": 74.1,
//         "windspeed": 6.1,
//         "winddirection": 180,
//         "is_day": 0,
//         "weathercode": 3
//     }
// }



document.getElementById("atlantaweather")?.addEventListener("click", () => {
  console.log("atlantaweather");
  fetchatlantaweather();
});

function fetchatlantaweather() {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch("https://api.open-meteo.com/v1/forecast?latitude=33.7489924&longitude=-84.3902644&current_weather=true&temperature_unit=fahrenheit&weathercode&weatherspeed", requestOptions)
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      atlanta = result
      setText("atlantatemp", atlanta.current_weather.temperature);
      setText("atlantawindspeed", atlanta.current_weather.windspeed);
      setText("atlantaweathercode", atlanta.current_weather.weathercode);

    })
    .catch((error) => console.error(error));
}