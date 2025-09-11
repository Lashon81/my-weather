var newOrleanstemp
var newOrleanswindspeed
var newOrleansweathercode
var newOrleansWeather = {}
//     "latitude": 29.983126,
//     "longitude": -90.07125,
//     "generationtime_ms": 0.06031990051269531,
//     "utc_offset_seconds": 0,
//     "timezone": "GMT",
//     "timezone_abbreviation": "GMT",
//     "elevation": 3,
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
//         "time": "2025-08-28T03:00",
//         "interval": 900,
//         "temperature": 79.9,
//         "windspeed": 5.9,
//         "winddirection": 133,
//         "is_day": 0,
//         "weathercode": 0
//     }
// };


document.getElementById("newOrleansweather")?.addEventListener("click", () => {
    console.log("newOrleansweather");
    fetchnewOrleansweather();
});

function fetchnewOrleansweather() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch("https://api.open-meteo.com/v1/forecast?latitude=29.95&longitude=-90.07&current_weather=true&temperature_unit=fahrenheit&windspeed&weathercode", requestOptions)
        .then((response) => response.json())
        .then(function (result) {
            console.log(result);
            newOrleans = result
            setText("newOrleanstemp", newOrleansWeather.current_weather.temperature);
            setText("newOrleanswindspeed", newOrleansWeather.current_weather.windspeed);
            setText("newOrleansweathercode", newOrleansWeather.current_weather.weathercode);
        })
        .catch((error) => console.error(error));
}