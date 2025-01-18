import React from "react";

export default function WeatherMain({ imageUrl, temperature }) {
  return (
    <div className="current-weather-main">
      <img
        src={`https:${imageUrl}`}
        alt="Weather Icon"
      />
      <h1 id="temp">{temperature}°</h1>
    </div>
  );
}