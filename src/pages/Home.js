import { useState } from "react";

export default function Home(getCity) {

  let [input, setInput] = useState("")

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
          <button>Search</button>
        </form>

      </div>


    );
  }
