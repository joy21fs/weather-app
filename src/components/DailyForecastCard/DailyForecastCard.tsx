import type { Day } from "../../types/days";
import WeatherIcon from "../WeatherIcon";
import css from "./DailyForecastCard.module.css";
import { getWeatherFromCode } from "~/helpers/transformWeatherCode";

interface Props {
  day: Day;
  weather_code: number;
  max_temp: number;
  min_temp: number;
}

export default function DailyForecastCard(props: Props) {
  const { day, weather_code, max_temp, min_temp } = props;
  return (
    <div className={css.DailyForecastCard}>
      <span className={css.day}>{day}</span>
      <WeatherIcon weather={getWeatherFromCode(weather_code)} />
      <div className={css.tempBlock}>
        <span>{max_temp}°</span>
        <span>{min_temp}°</span>
      </div>
    </div>
  );
}
