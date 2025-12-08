import type { HourlyWeather } from "~/types/weather";
import css from "./HourlyForecastCard.module.css";
import WeatherIcon from "../WeatherIcon";

interface Props extends HourlyWeather {
  loading?: boolean;
}

export default function HourlyForecastCard(props: Props) {
  const { weather, timeLabel, temperature, loading } = props;

  return (
    <div className={`${css.HourlyForecastCard} ${loading ? css.loading : ""}`}>
      <div className={css.weatherNTime}>
        <WeatherIcon weather={weather ?? "sunny"} />
        <span>{timeLabel}</span>
      </div>
      <span className={css.temperature}>{`${temperature}°`}</span>
    </div>
  );
}
