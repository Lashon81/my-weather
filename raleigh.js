var raleighncWeather 
var temperature
var windspeed
var weathercode={
    "latitude": 35.77436,
    "longitude": -78.64127,
    "generationtime_ms": 0.0667572021484375,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 113,
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
        "temperature": 68.2,
        "windspeed": 2.6,
        "winddirection": 304,
        "is_day": 0,
        "weathercode": 0
    }
}

setText("temp", raleighncWeather.current_weather.temperature);
setText("wind", raleighncWeather.current_weather.windspeed);
setText("code", raleighncWeather.current_weather.weathercode);