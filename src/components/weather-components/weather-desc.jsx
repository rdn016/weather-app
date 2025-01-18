import React from "react";

export default function WeatherDesc({ name, weatherCondition }) {
  return (
    <div className="current-weather-desc">
      <h2>{weatherCondition}</h2>
      <p id="current-weather-location">{name}</p>
    </div>
  );
}