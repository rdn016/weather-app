import React from "react";

export default function WeatherDetail({ humidity, precip, maxWind, wind }) {
  return (
    <div className="weather-details">
      <div className="detail-item">
        <h3>humidity</h3> 
        <p>{humidity}%</p>
      </div>
      <div className="detail-item">
        <h3>precipitation</h3> 
        <p>{precip} mm</p>
      </div>
      <div className="detail-item">
        <h3>Max Wind Speed</h3> 
        <p>{maxWind} km/h</p>
      </div>
      <div className="detail-item">
        <h3>Wind Speed</h3> 
        <p>{wind} km/h</p>
      </div>
    </div>
  );
}