import type { HourlyWeather } from "~/types/weather";
import css from "./HourlyForecastCard.module.css";
import WeatherIcon from "../WeatherIcon";

export default function HourlyForecastCard(props: HourlyWeather) {
  const { weather, timeLabel, temperature } = props;

  return (
    <div className={css.HourlyForecastCard}>
      <div className={css.weatherNTime}>
        <WeatherIcon weather={weather ?? "sunny"} />
        <span>{timeLabel}</span>
      </div>
      <span className={css.temperature}>{`${temperature}°`}</span>
    </div>
  );
}
