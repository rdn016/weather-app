import React from "react";

export default function WeatherHeader({ time, region }) {
  return (
    <div className="current-weather-header">
      <h3>{region}</h3>
      <p>{time}</p>
    </div>
  );
}