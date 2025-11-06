import type { Weather } from "~/types/weather";
import css from "./SummarySection.module.css";
import WeatherIcon from "../WeatherIcon";

interface Props {
  location: string;
  date: string;
  weather: Weather;
  currentTemperature: number;
}

export default function SummarySection(props: Props) {
  const { location, date, weather, currentTemperature } = props;

  return (
    <div className={css.SummarySection}>
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
