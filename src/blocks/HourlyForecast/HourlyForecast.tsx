import { useTranslation } from "react-i18next";
import css from "./HourlyForecast.module.css";
import HourlyForecastCard from "~/components/HourlyForecastCard";
import type { HourlyWeather } from "~/types/weather";
import DayDropdown from "../../components/DayDropdown";

interface Props {
  hours: HourlyWeather[];
}

export default function HourlyForecast(props: Props) {
  const { t } = useTranslation();
  const { hours } = props;

  return (
    <div className={css.HourlyForecast}>
      <div className={css.header}>
        <h2>{t("sectionTitle.hourlyForecast")}</h2>
        <DayDropdown />
      </div>
      <div className={css.hours}>
        {hours.map(({ weather, timeLabel, temperature }) => (
          <HourlyForecastCard
            key={timeLabel}
            weather={weather}
            timeLabel={timeLabel}
            temperature={temperature}
          />
        ))}
      </div>
    </div>
  );
}
