import React from 'react'
import { useState } from "react";

export default function Header() {

  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")

  // weatherFunction
  // const getWeather = (event) => {
  //   if (event.key == "Enter") {
    
  //     response => response.json()
  //     ).then(
  //       data => {
  //         setWeatherData(data)
  //       }
  //     )
  //   }
  // }

    return (
      <div className="container">
        <input className="input" placeholder="Enter City" onChange={e => setCity(e.target.value)} value={city}
        />
      {/* fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then( */}
      
      
      </div>
    );
  }