var seattletemp
var seattlewindspeed
var seattleweathercode
var seattle = {}
//     "latitude": 47.595562,
//     "longitude": -122.32443,
//     "generationtime_ms": 0.0654458999633789,
//     "utc_offset_seconds": 0,
//     "timezone": "GMT",
//     "timezone_abbreviation": "GMT",
//     "elevation": 40,
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
//         "temperature": 70.2,
//         "windspeed": 5.6,
//         "winddirection": 243,
//         "is_day": 1,
//         "weathercode": 3
//     }
// }

document.getElementById("getWeather")?.addEventListener("click", () => {
    console.log("seattleweather");
});


function fetchseattleweather() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch("https://api.open-meteo.com/v1/forecast?latitude=47.6038321&longitude=-122.330062&current_weather=true&temperature_unit=fahrenheit&windspeed&weathercode", requestOptions)
        .then((response) => response.text())
        .then(function (result) {
            console.log(result);
            seattle = result
            setText("seattletemp", seattle.current_weather.temperature);
            setText("seattlewindspeed", seattle.current_weather.windspeed);
            setText("seattleweathercode", seattle.current_weather.weathercode);
        })
        .catch((error) => console.error(error));
}