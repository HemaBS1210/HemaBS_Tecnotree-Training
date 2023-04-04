import React, { useState } from 'react';

function Weather() {
  const [temperature, setTemperature] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const apiKey = '6e63f5d472671fed86266e9d95b72b1a';

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`);
      const data = await response.json();
      setTemperature(data.main.temp);
      setDescription(data.weather[0].description);
    } catch (error) {
      console.error(error);
    }
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }

  return (
    <div className="weather-container">
      <h1 className="title">Weather App</h1>
      <form onSubmit={handleFormSubmit}>
        <input className="location-input" type="text" placeholder="Enter location" onChange={handleLocationChange} />
        <button className="submit-button" type="submit">Get Weather</button>
      </form>
      {temperature && description &&
        <div className="result-container">
          <p className="temperature">Temperature: {temperature} °C</p>
          <p className="description">Description: {description}</p>
        </div>
      }
    </div>
  );
}

export default Weather;
