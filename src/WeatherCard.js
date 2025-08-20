import React from 'react';
import './App.css';

function WeatherCard({ data }) {
  return (
    <div className="card">
      <h2>{data.city}</h2>
      <img src={data.icon} alt={data.condition} className="icon" />
      <h3>{data.condition}</h3>
      <p><strong>Temperature:</strong> {data.temperature}</p>
      <p><strong>Humidity:</strong> {data.humidity}</p>
      <p><strong>Wind:</strong> {data.wind}</p>
    </div>
  );
}

export default WeatherCard;
