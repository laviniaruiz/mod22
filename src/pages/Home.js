import { useState } from "react";

export default function Home(getCity) {

  let [input, setInput] = useState("");
  let [data1, setData] = useState(null);

  async function getWeather({weather})

  {
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=7747d3f7f3c84c3715d69cbed5db6965`
  try{
    let response = await fetch(url)
    let data = await response.json()
    setData(data)
    console.log(data)

  } catch(error) {
    console.log(error)
  }
  }

  function handleChange(evt){
    setInput(evt.target.value)
  }

  function handleSubmit(evt){
    evt.preventDefault()
    // getWeather(input)
  }
    return (

      <div className="home">
        <h1>♥ Welcome to Lala-Land Weather Channel™ ♥</h1>
        {/* <p className="paragraph">♡ The Weather Channel of Lala-Land is an American free television channel owned by
        Lala-Land Group ♡ The channel's headquarter is in New York City ♡</p> */}

        <form onSubmit={handleSubmit}>
          <input value={input} placeholder="Enter City" onChange={handleChange} />
          <button onClick={getWeather}>Search</button>
        </form>

        {/* <p>{data1.main.temp}</p> */}
        {/* {data1 && <getWeather weather={data1}/> } */}

      </div>


    );
  }
