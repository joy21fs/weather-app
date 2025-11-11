import type { Day } from "~/types/days";
import css from "./DailyForecast.module.css";
import DailyForecastCard from "~/components/DailyForecastCard";
import type { Props as Forecast } from "~/components/DailyForecastCard";
import { useTranslation } from "react-i18next";

interface Props {
  startDay: Day;
  forecasts: Forecast[];
}

const DAYS: Day[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function DailyForecast(props: Props) {
  const { t } = useTranslation();
  const { forecasts, startDay } = props;
  const startIndex = DAYS.indexOf(startDay);
  const rotatedDays = [...DAYS.slice(startIndex), ...DAYS.slice(0, startIndex)];

  const orderedForecasts = rotatedDays.map(
    (day) => forecasts.find((f) => f.day === day)!
  );

  return (
    <div className={css.DailyForecast}>
      <h2>{t("sectionTitle.dailyForecast")}</h2>
      <div className={css.cardsSec}>
        {orderedForecasts.map((forecast) => (
          <DailyForecastCard
            key={forecast.day}
            day={forecast.day}
            weather_code={forecast.weather_code}
            max_temp={forecast.max_temp}
            min_temp={forecast.min_temp}
          />
        ))}
      </div>
    </div>
  );
}
