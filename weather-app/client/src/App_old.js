import React, { useState } from 'react';


function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const fetchAgainstLocalApi = (event) => {
    if (event.key === "Enter") {
      fetch('http://localhost:8000/')
        .then(res => {
          return res.json()
        })
        .then(json => {
          setWeather(json);
          setQuery('');
          console.log(json);
        })
        .catch(err => {
          console.log("hmmm...something went wrong " + err);
        })
    }
  }

  // const search = event => {
  //   if (event.key === "Enter") {
  //     console.log(`Fetching API with event key: ${event.key}`)
  //     fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
  //     .then(res => res.json())
  //     .then(result => {
  //       setWeather(result);
  //       setQuery('');
  //     });
  //   }
  // }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", 
                  "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`

  }



  return (
    <div className={
      (typeof weather.main != "undefined")
      ? ((weather.main.temp > 59)
      ? 'app warm'
      : 'app')
      : 'app'}>

      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search ..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={(e) => fetchAgainstLocalApi(e)}
          />
        </div>
        {(typeof weather.main != "undefined") ? (  
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.county}</div>
            <div className="date">{ dateBuilder(new Date()) }</div>
          </div>
          <div className="weather-box">
            <div className="temp">
                {Math.round(weather.main.temp)}°F
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;


