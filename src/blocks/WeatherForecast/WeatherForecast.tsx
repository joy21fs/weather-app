import { useTranslation } from "react-i18next";
import Logo from "~/assets/logo.svg";
import css from "./WeatherForecast.module.css";
import UnitSettings from "../UnitSettings";
import LocationSearch from "../LocationSearch/LocationSearch";
import WeatherSummary from "../WeatherSummary";
import DailyForecast from "../DailyForecast";
import HourlyForecast from "../HourlyForecast";
import { useWeather } from "~/contexts/WeatherContext";
import type { Day } from "~/types/days";
import { useState } from "react";
import type { Location } from "../LocationSearch/LocationSearch";

const DAYS: Day[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function WeatherForecast() {
  const { t } = useTranslation();
  const { current, hourly, daily, locationLabel } = useWeather();
  const today = DAYS[new Date().getDay()];
  const [searchResults, setSearchResults] = useState<Location[]>([
    { name: "Taichung", country: "Taiwan" },
  ]);

  return (
    <div className={css.WeatherForecast}>
      <header className={css.nav}>
        <img src={Logo} alt={"logo "} />
        <UnitSettings />
      </header>
      <h1>{t("welcome")}</h1>
      <LocationSearch results={searchResults} onSearch={setSearchResults} />
      {searchResults.length ? (
        <section className={css.weatherInfo}>
          <div className={css.weatherSummary}>
            <WeatherSummary
              apparent_temperature={`${current?.apparent_temperature}`}
              relative_humidity_2m={`${current?.relative_humidity_2m}`}
              wind_speed_10m={`${current?.wind_speed_10m}`}
              precipitation={`${current?.precipitation}`}
              location={locationLabel}
              date={new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              weather={current?.weather ?? "sunny"}
              currentTemperature={`${current?.temperature_2m}`}
            />
          </div>
          <div className={css.dailyForecast}>
            <DailyForecast startDay={today} forecasts={daily} />
          </div>
          <div className={css.hourlyForecast}>
            <HourlyForecast hours={hourly} />
          </div>
        </section>
      ) : (
        <span style={{ font: "var(--font-4)" }}>{t("search.noResult")}</span>
      )}
    </div>
  );
}
