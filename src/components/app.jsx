import React from "react";
import Header from "./header";
import Weather from "./weather";
import FetchApi from "../global/fetch-api";
/* ini berisi seluruh komponen yang ditampung */
export default function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [data, error, loading] = FetchApi(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=indonesia&aqi=no`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { location, current } = data;
  const { name, region } = location;
  const {
    temp_c: temperature,
    condition: { text: weatherCondition, icon: imageUrl },
    humidity,
    precip_mm: precip,
    gust_kph: maxWind,
    wind_kph: windspeed,
  } = current;

  return (
    <div>
      <Header />
      <Weather
        name={name}
        region={region}
        temperature={temperature}
        weatherCondition={weatherCondition}
        imageUrl={imageUrl}
        humidity={humidity}
        precip={precip}
        maxWind={maxWind}
        windspeed={windspeed}
      />
    </div>
  );
}