import type { Weather } from "~/types/weather";
import css from "./WeatherOverview.module.css";
import WeatherIcon from "../WeatherIcon";
import { ThreeDot } from "react-loading-indicators";
import { useTranslation } from "react-i18next";

export interface Props {
  location: string;
  date: string;
  weather: Weather;
  currentTemperature: string;
  loading?: boolean;
}

export default function WeatherOverview(props: Props) {
  const { location, date, weather, currentTemperature, loading } = props;
  const { t } = useTranslation();

  return (
    <div className={`${css.WeatherOverview} ${loading ? css.isLoading : ""}`}>
      <div className={css.loading}>
        <ThreeDot color='#fff' size='medium' text='' textColor='' />
        <span>{t("loading")}</span>
      </div>
      <div className={css.content}>
        <div className={css.placeNDate}>
          <span className={css.place}>{location}</span>
          <span className={css.date}>{date}</span>
        </div>
        <div className={css.iconNTemp}>
          <WeatherIcon weather={weather} />
          <span className={css.temperature}>{`${currentTemperature}°`}</span>
        </div>
      </div>
    </div>
  );
}
