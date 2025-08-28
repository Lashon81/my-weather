var newOrleansWeather ={
    "latitude": 35.77436,
    "longitude": -78.64127,
    "generationtime_ms": 0.07367134094238281,
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
        "time": "2025-08-28T00:45",
        "interval": 900,
        "temperature": 69.3,
        "windspeed": 7.6,
        "winddirection": 8,
        "is_day": 0,
        "weathercode": 1
    }
}

setText("temp", newOrleansWeather.current_weather.temperature);
setText("wind", newOrleansWeather.current_weather.windspeed);
setText("code", newOrleansWeather.current_weather.weathercode);