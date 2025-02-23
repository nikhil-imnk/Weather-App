import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ newInfo }) {
  let [city, setCity] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

  let getWeatherInfo = async () => {
    try {
      let data = await fetch(`${API_URL}${city}&appid=${apiKey}&units=metric`);
      let jsonData = await data.json();
      let info = {
        city: city,
        temp: jsonData.main.temp,
        temp_max: jsonData.main.temp_max,
        temp_min: jsonData.main.temp_min,
        humidity: jsonData.main.humidity,
      };
      console.log(info);
      setError(false);
      newInfo(info);
    } catch (err) {
      setError(true);
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    getWeatherInfo(city);
    setCity("");
  };
  return (
    <div className="SearchBox">
      <h1>Search for the weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Enter Location"
          variant="outlined"
          onChange={handleChange}
          value={city}
          required
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {error ? <p style={{ color: "red" }}>No such location exist!</p> : null}
    </div>
  );
}
