import type { Weather } from "~/types/weather";
import css from "./HourlyForecastCard.module.css";
import WeatherIcon from "../WeatherIcon";

interface Props {
  weather: Weather;
  time: string;
  temperature: number;
}

export default function HourlyForecastCard(props: Props) {
  const { weather, time, temperature } = props;

  return (
    <div className={css.HourlyForecastCard}>
      <div className={css.weatherNTime}>
        <WeatherIcon weather={weather} />
        <span>{time}</span>
      </div>
      <span className={css.temperature}>{`${temperature}°`}</span>
    </div>
  );
}
