import requests
import json

# API key for OpenWeatherMap
API_KEY = 'dd9522d61f9dc21ce3dd22998e160311'

def get_weather(city):
    """
    Returns the current weather condition for a given city
    """
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric'
    response = requests.get(url)

    # Parse the JSON response
    data = json.loads(response.text)

    # Extract the relevant weather information
    weather = {
        'city': data['name'],
        'temperature': data['main']['temp'],
        'description': data['weather'][0]['description'],
        'humidity': data['main']['humidity'],
        'wind_speed': data['wind']['speed']
    }

    # Return the weather information
    return weather


# Example usage
city_name = input("Enter a city name: ")
weather = get_weather(city_name)

print(f"Current weather in {weather['city']}:\nTemperature: {weather['temperature']} °C\nDescription: {weather['description']}\nHumidity: {weather['humidity']}%\nWind Speed: {weather['wind_speed']} m/s")
