var weathercode 
var temperature
var windspeed
var atlanta={
    "latitude": 33.759865,
    "longitude": -84.39587,
    "generationtime_ms": 0.05793571472167969,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 317,
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
        "time": "2025-08-28T01:15",
        "interval": 900,
        "temperature": 74.1,
        "windspeed": 6.1,
        "winddirection": 180,
        "is_day": 0,
        "weathercode": 3
    }
}

setText("temp", atlanta.current_weather.temperature);
setText("windspeed", atlanta.current_weather.windspeed);
setText("weathercode", atlanta.current_weather.weathercode);