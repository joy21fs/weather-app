import type { Weather } from "~/types/weather";
import css from "./WeatherOverview.module.css";
import WeatherIcon from "../WeatherIcon";

export interface Props {
  location: string;
  date: string;
  weather: Weather;
  currentTemperature: string;
}

export default function WeatherOverview(props: Props) {
  const { location, date, weather, currentTemperature } = props;

  return (
    <div className={css.WeatherOverview}>
      <div className={css.placeNDate}>
        <span className={css.place}>{location}</span>
        <span className={css.date}>{date}</span>
      </div>
      <div className={css.iconNTemp}>
        <WeatherIcon weather={weather} />
        <span className={css.temperature}>{`${currentTemperature}°`}</span>
      </div>
    </div>
  );
}
