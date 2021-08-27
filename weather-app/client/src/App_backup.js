import React, { useState } from 'react';

const api = {
  key: "59356a48f5521dad3d8822085b0c8bc9",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const searchFiveDays = event => {
    if (event.key === "Enter") {
      console.log(`Fetching API with event key: ${event.key}`)
      // fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
      fetch(`${api.base}forecast?q=${query}&units=imperial&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        let lat = result.city.coord.lat 
        let long = result.city.coord.lon
        fetch(`${api.base}onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(fiveDayData => {
          setWeather(fiveDayData.daily)
          console.log(weather)
        })
      //   setWeather(result);
      //   setQuery('');
      });
    }
  }


  const search = event => {
    if (event.key === "Enter") {
      console.log(`Fetching API with event key: ${event.key}`)
      fetch(`${api.base}weather?q=${query}&units=imperial&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
      });
    }
  }

  const dateConverter = (dateTime) => {
    let milliseconds = dateTime * 1000
    let dateObject = new Date(milliseconds)
    return dateBuilder(dateObject)
  }


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
            placeholder="Please Enter a City..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            // onKeyPress={(e) => search(e) 
            onKeyPress={(e) => {
            searchFiveDays(e)
            // search(e)
            }}
            // onKeyPress={(e) => search(e)}
          />
        </div>
        {(weather.length !== 0 && Array.isArray(weather)) ? (  
        <div>
          <div className="location-box">
            <div className="location">{query}</div>
            <div className="date">{ dateConverter(weather[0].dt) }</div>
          </div>
          <div className="weather-box">
            <div className="temp">
                {Math.floor(weather[0].temp.day)}°F
              </div>
              <div className="weather">{weather[0].weather[0].main}</div>
              <div>
                {weather.map(weatherInfo => {
                  return (
              <div>
                  <div className="date">{dateConverter(weatherInfo.dt)}</div>
                  <div className="temp">{Math.floor(weatherInfo.temp.day)}F</div>
              </div>
                  )
                })
                }
              </div>
          </div>

        </div>
        ) : ('')}
      </main>

      {/* <div>
        {weather.map(weatherInfo => {
          return (
            <div>
                <div className="date">{dateConverter(weatherInfo.dt)}</div>
                <div className="temp">{Math.floor(weatherInfo.temp.day)}F</div>
            </div>
          )
        })
        }
      </div> */}


    </div>
  );
}

export default App;


