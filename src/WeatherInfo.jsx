import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherInfo() {
  let [info, setInfo] = useState({
    city: "Mumbai",
    temp: 30,
    temp_max: 31,
    temp_min: 30,
    humidity: 79,
  });

  let newInfo = (result) => {
    setInfo(result);
  };
  return (
    <>
      <SearchBox newInfo={newInfo} />
      <InfoBox info={info} />
    </>
  );
}
