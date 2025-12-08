import { type DailyForecast } from "~/contexts/WeatherContext";
import WeatherIcon from "../WeatherIcon";
import css from "./DailyForecastCard.module.css";

interface Props extends DailyForecast {
  loading?: boolean;
}

export default function DailyForecastCard(props: Props) {
  const { day, weather, max_temp, min_temp, loading } = props;

  return (
    <div className={`${css.DailyForecastCard} ${loading ? css.loading : ""}`}>
      <span className={css.day}>{day}</span>
      <WeatherIcon weather={weather ?? "sunny"} />
      <div className={css.tempBlock}>
        <span>{max_temp}°</span>
        <span>{min_temp}°</span>
      </div>
    </div>
  );
}
