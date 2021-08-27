const express = require('express');
const cors = require('cors');

const app = express();

const port = 8000;

const api = {
    key: "59356a48f5521dad3d8822085b0c8bc9",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
app.use(cors());



app.get("/", (req, res) => {
    // res.send(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
    // res.send ({ message: 'API Working' });

    fetch(`${api.base}weather?q=Sausalito&units=imperial&APPID=${api.key}`)
    .then(res => {
      return res.json()
    })
    .then(json => {
    //   setWeather(json);
    //   setQuery('');
      console.log(json);
      res.send (json);
    })
    .catch(err => {
      console.log("hmmm...something went wrong " + err);
    })




});


// app.get('/', (req, res) => {
//     res.send("Hello World, from Francesca and Elizabeth");
// });

app.listen(port, () => console.log('Hello world app listening on port 8000!'))
