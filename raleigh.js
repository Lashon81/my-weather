var raleightemp
var raleighwindspeed
var raleighweathercode
var raleigh = {}
//     "latitude": 35.77436,
//     "longitude": -78.64127,
//     "generationtime_ms": 0.0667572021484375,
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
//         "time": "2025-08-28T01:30",
//         "interval": 900,
//         "temperature": 68.2,
//         "windspeed": 2.6,
//         "winddirection": 304,
//         "is_day": 0,
//         "weathercode": 0
//     }
// }

document.getElementById("raleighweather")?.addEventListener("click", () => {
  console.log("raleighweather");
});

function fetchraleighweather() {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch("https://api.open-meteo.com/v1/forecast?latitude=35.7803977&longitude=-78.6390989&current_weather=true&temperature_unit=fahrenheit&windspeed&weathercode", requestOptions)
    .then((response) => response.text())
    .then(function (result) {
      console.log(result);
      raleigh = result
      setText("raleightemp", raleigh.current_weather.temperature);
      setText("raleighwindspeed", raleigh.current_weather.windspeed);
      setText("raleighweathercode", raleigh.current_weather.weathercode);
    })
    .catch((error) => console.error(error));
}