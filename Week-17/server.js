const express = require("express");
const request = require("request");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Home Page");
});

// Current weather conditions of any particular city
app.get("/city/:cityName", async (req, res) => {
  let cityName = req.params.cityName;
  let url = `${process.env.BASE_API_URL}/weather?q=${cityName}&appid=${process.env.API_KEY}&units=metric`;

  let responseData = await axios.get(url);
  responseData = responseData.data;
  let message = `It's ${responseData.main.temp} in ${responseData.name}`;
  res.send(message);
});

//forecast - PAID API
app.get("/forecast/:cityName/:forecastDays", (req, res) => {
  let cityName = req.params.cityName;
  let forecastDays = req.params.forecastDays;

  console.log("cityName", cityName);
  console.log("forecastDays", forecastDays);
  //api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}

  if (forecastDays < 0 || forecastDays > 16) {
    let message = "Please enter forecast days between 1 to 16";
    res.send(message);
  } else {
    let url = `${process.env.BASE_API_URL}/forecast/daily?q=${cityName}&cnt=${forecastDays}&appid=${process.env.API_KEY}&units=metric`;
    console.log("url", url);
  }
});

//multiple cities data
app.post("/forecast/multiplecities", async (req, res) => {
  try {
    let cityArray = req.body.cities;
    console.log("cityArray", cityArray);

    let finalResponse = [];

    for (let eachCity of cityArray) {
      let url = `${process.env.BASE_API_URL}/weather?q=${eachCity}&appid=${process.env.API_KEY}&units=metric`;

      let responseData = await axios.get(url);
      responseData = responseData.data;
      let message = `It's ${responseData.main.temp} in ${responseData.name}`;
      finalResponse.push(message);
    }
    console.log("YOYOYOOYYOYO");
    res.send(finalResponse);
  } catch (e) {
    return e;
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
