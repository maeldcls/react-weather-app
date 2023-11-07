import '../css/App.css'
import Header from './Header.js';
import Weather from './Weather.js';
import React, { useState, useEffect } from 'react';


function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [location, setLocation] = useState("Lyon");
  const [temperature, setTemperature] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  const [isDataLoaded, setDataLoaded] = useState(false);

  const handleWeatherSubmit = (location) => {
    setDataLoaded(false);
    setLocation(location);
    callAPI();
    setTemperature(weatherData.current.temp_c);
    setWind(weatherData.current.wind_kph);
    setIcon(weatherData.current.condition.icon);
  };

  //change les valeurs affichés en fonction du jour choisis
  const handleDayClick = (clickedDayId) => {

    if (clickedDayId == 0) {

      setTemperature(weatherData.current.temp_c);
      setWind(weatherData.current.wind_kph);
      setIcon(weatherData.current.condition.icon);
    } else {

      setTemperature(weatherData.forecast.forecastday[clickedDayId].day.avgtemp_c);
      setWind(weatherData.forecast.forecastday[clickedDayId].day.avgvis_km);
      setIcon(weatherData.forecast.forecastday[clickedDayId].day.condition.icon);
    }

  };

  function callAPI(){
    const apiUrl = process.env.REACT_APP_WEATHER_API_URL;
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    let apiFullUrl = `${apiUrl}?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`;

    // Effectuer la requête GET
    fetch(apiFullUrl)
      .then(response => {
        if (response.status !== 200) {
          console.error(`Erreur : ${response.status}`);
          return;
        }
        return response.json();
      })
      .then(data => {
        if(!isDataLoaded){
          setWeatherData(data);
          setDataLoaded(true);
   
        }
          
      })
      .catch(error => {
        console.error('Une erreur s\'est produite :', error);
      });
  }

  
  useEffect(() => {
    callAPI();

  });

  return (
    <div className="App">
      <Header />
      <Weather
        location={location}
        temperature={temperature}
        wind={wind}
        icon={icon}
        onSubmit={handleWeatherSubmit}
        onDayClick={handleDayClick}
      />
    </div>

  );
}

export default App;
