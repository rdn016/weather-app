import React from "react";
import WeatherDesc from "./weather-components/weather-desc";
import WeatherDetail from "./weather-components/weather-detail";
import WeatherHeader from "./weather-components/weather-header";
import WeatherMain from "./weather-components/weather-main";

export default function Weather({name, weatherCondition, time, region, humidity, precip, maxWind, imageUrl, temperature, wind}) {
  return (
    <div className="current-weather">
      <WeatherHeader time={time} region={region}/>
      <WeatherMain imageUrl={imageUrl} temperature={temperature}/>
      <WeatherDesc name={name} weatherCondition={weatherCondition}/>
      <WeatherDetail maxWind={maxWind} humidity={humidity} precip={precip} wind={wind}/>
    </div>
  );
}
