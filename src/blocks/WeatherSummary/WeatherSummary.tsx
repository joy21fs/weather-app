import WeatherOverview from "~/components/WeatherOverview";
import InfoCard from "~/components/InfoCard";
import type { Props as WeatherOverviewProps } from "~/components/WeatherOverview";
import type { WeatherParms } from "~/types/weather";
import css from "./WeatherSummary.module.css";
import { useTranslation } from "react-i18next";
import { useWeather } from "~/contexts/WeatherContext";

type DisplayWeatherKeys = Pick<
  WeatherParms,
  | "apparent_temperature"
  | "relative_humidity_2m"
  | "wind_speed_10m"
  | "precipitation"
>;

const DISPLAY_INFO: (keyof DisplayWeatherKeys)[] = [
  "apparent_temperature",
  "relative_humidity_2m",
  "wind_speed_10m",
  "precipitation",
];

interface WeatherSummaryProps extends WeatherOverviewProps {
  apparent_temperature: string;
  relative_humidity_2m: string;
  wind_speed_10m: string;
  precipitation: string;
}

export default function WeatherSummary(props: WeatherSummaryProps) {
  const { t } = useTranslation();
  const { location, date, weather, currentTemperature, ...weatherValues } =
    props;
  const { loading } = useWeather();

  return (
    <div className={css.WeatherSummary}>
      <WeatherOverview
        location={location}
        date={date}
        weather={weather}
        currentTemperature={currentTemperature}
        loading={loading}
      />
      <div className={css.infoSection}>
        {DISPLAY_INFO.map((infoName) => {
          const value = weatherValues[infoName];
          const label = t(`weatherInfo.${infoName}`);
          return (
            <InfoCard
              key={infoName}
              infoName={label}
              value={loading ? "-" : value}
            />
          );
        })}
      </div>
    </div>
  );
}
