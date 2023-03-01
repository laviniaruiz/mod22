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
        <input className="input" placeholder="Enter City" />

        <div className="container">
          <input className="input" type="button" value="Click Here" />

        </div>
      </div>
    );
  }