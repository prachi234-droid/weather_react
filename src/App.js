import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "6b26d9bee5fbcc5b5335166c7ff5f07c";
      const city = "Bengaluru";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(url);
        const data = response.data;

        setWeather({
          city: data.name,
          temperature: `${data.main.temp}°C`,
          condition: data.weather[0].main,
          humidity: `${data.main.humidity}%`,
          wind: `${data.wind.speed} km/h`,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        });
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>🌤️ Live Weather Info</h1>
      {weather ? <WeatherCard data={weather} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
