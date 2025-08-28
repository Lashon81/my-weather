var newOrleansWeather
var temperature
var windspeed
var weathercode = {
    "latitude": 29.983126,
    "longitude": -90.07125,
    "generationtime_ms": 0.06031990051269531,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 3,
    "current_weather_units": {
        "time": "iso8601",
        "interval": "seconds",
        "temperature": "°F",
        "windspeed": "km/h",
        "winddirection": "°",
        "is_day": "",
        "weathercode": "wmo code"
    },
    "current_weather": {
        "time": "2025-08-28T03:00",
        "interval": 900,
        "temperature": 79.9,
        "windspeed": 5.9,
        "winddirection": 133,
        "is_day": 0,
        "weathercode": 0
    }
}

setText("temp", newOrleansWeather.current_weather.temperature);
setText("wind", newOrleansWeather.current_weather.windspeed);
setText("code", newOrleansWeather.current_weather.weathercode);


onEvent("ClickMe", "click", function () {
    console.log("clicked ClickMe.");
    document.getElementById("ClickMe").setAttribute("href", "index.html");
    setText("ClickMe", "New Orleans Weather", "Temperature: 69.3°C", "Wind Speed: 7.6 km/h", "Weather Code: 1");
});