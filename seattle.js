var seattleweather
var temperature
var windspeed
var weathercode={
    "latitude": 47.595562,
    "longitude": -122.32443,
    "generationtime_ms": 0.0654458999633789,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 40,
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
        "time": "2025-08-28T01:30",
        "interval": 900,
        "temperature": 70.2,
        "windspeed": 5.6,
        "winddirection": 243,
        "is_day": 1,
        "weathercode": 3
    }
}

setText("temp", newYorkWeather.current_weather.temperature);
setText("wind", newYorkWeather.current_weather.windspeed);
setText("code", newYorkWeather.current_weather.weathercode);

helper.js
seattle-script.js