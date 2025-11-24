import { useTranslation } from "react-i18next";
import Logo from "~/assets/logo.svg";
import css from "./WeatherForecast.module.css";
import UnitSettings from "../UnitSettings";
import LocationSearch from "../LocationSearch/LocationSearch";
import WeatherSummary from "../WeatherSummary";
import DailyForecast from "../DailyForecast";
import HourlyForecast from "../HourlyForecast";

export default function WeatherForecast() {
  const { t } = useTranslation();
  return (
    <div className={css.WeatherForecast}>
      <header className={css.nav}>
        <img src={Logo} alt={"logo "} />
        <UnitSettings />
      </header>
      <h1>{t("welcome")}</h1>
      <LocationSearch />
      <section className={css.weatherInfo}>
        <div className={css.weatherSummary}>
          <WeatherSummary
            apparent_temperature={""}
            relative_humidity_2m={""}
            wind_speed_10m={""}
            precipitation={""}
            location={"Berlin, Germany"}
            date={new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            weather={"sunny"}
            currentTemperature={0}
          />
        </div>
        <div className={css.dailyForecast}>
          <DailyForecast
            startDay={"Tue"}
            forecasts={[
              { day: "Mon", weather_code: 3, max_temp: 25, min_temp: 18 },
              { day: "Tue", weather_code: 1, max_temp: 27, min_temp: 19 },
              { day: "Wed", weather_code: 2, max_temp: 26, min_temp: 17 },
              { day: "Thu", weather_code: 61, max_temp: 22, min_temp: 16 },
              { day: "Fri", weather_code: 80, max_temp: 20, min_temp: 15 },
              { day: "Sat", weather_code: 0, max_temp: 28, min_temp: 20 },
              { day: "Sun", weather_code: 45, max_temp: 24, min_temp: 18 },
            ]}
          />
        </div>
        <div className={css.hourlyForecast}>
          <HourlyForecast
            hours={[
              {
                weather: "stormy",
                temperature: 58,
                time: "3 PM",
              },
              {
                weather: "rainy",
                temperature: 55,
                time: "4 PM",
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
