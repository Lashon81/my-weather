var newyorktemp
var newyorkwindspeed
var newyorkweathercode
var newyork = {}
//     "latitude": 35.77436,
//     "longitude": -78.64127,
//     "generationtime_ms": 0.07367134094238281,
//     "utc_offset_seconds": 0,
//     "timezone": "GMT",
//     "timezone_abbreviation": "GMT",
//     "elevation": 113,
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
//         "time": "2025-08-28T00:45",
//         "interval": 900,
//         "temperature": 69.3,
//         "windspeed": 7.6,
//         "winddirection": 8,
//         "is_day": 0,
//         "weathercode": 1
//     }
// }

document.getElementById("newyorkweather")?.addEventListener("click", () => {
  console.log("newyorkweather");
  fetchnewyorkweather();
});

function fetchnewyorkweather() {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7127281&longitude=-74.0060152&current_weather=true&temperature_unit=fahrenheit&weathercode&windspeed", requestOptions)
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      newyork = result
      setText("newyorktemp", newyork.current_weather.temperature);
      setText("newyorkwindspeed", newyork.current_weather.windspeed);
      setText("newyorkweathercode", newyork.current_weather.weathercode);
    })
    .catch((error) => console.error(error));
}