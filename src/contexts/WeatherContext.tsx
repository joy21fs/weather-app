/* eslint-disable react-refresh/only-export-components */
import { fetchWeatherApi } from "openmeteo";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { convertValue } from "~/helpers/convertUnitValues";
import { getWeatherFromCode } from "~/helpers/transformWeatherCode";
import type { Day } from "~/types/days";
import {
  getUnitConfig,
  UNIT_SYSTEMS,
  type UnitSystem,
  type UnitType,
} from "~/types/units";
import type { HourlyWeather, Weather, WeatherParms } from "~/types/weather";

// ---------- TYPES ----------
export interface CurrentWeather
  extends Omit<WeatherParms, "latitude" | "longitude"> {
  weather: Weather | null;
}

export interface DailyForecast {
  day: Day;
  weather: Weather | null;
  max_temp: number | null;
  min_temp: number | null;
  date: Date;
}

export interface WeatherState {
  current: CurrentWeather | null;
  daily: DailyForecast[];
  hourly: HourlyWeather[];
  loading: boolean;
  error: string | null;

  latitude: number | null;
  longitude: number | null;
  locationLabel: string;

  unitSystem: UnitSystem;
  units: Record<UnitType, string>;
  setUnits: (type: UnitType, unit: string) => void;
  setUnitSystem: (system: UnitSystem) => void;
  setLocation: (lat: number, lon: number, label: string) => void;

  selectedDate: Date;
  setSelectedDate: (d: Date) => void;
}

export const WeatherContext = createContext<WeatherState | null>(null);

export const useWeather = (): WeatherState => {
  const ctx = useContext(WeatherContext);
  if (!ctx) throw new Error("useWeather must be used within WeatherProvider");
  return ctx;
};

// ---------- DEFAULT ----------
const DEFAULT_WEATHER_PARAMS = {
  locationLabel: "Taichung, Taiwan",
  latitude: 24.1469,
  longitude: 120.6839,
  units: getUnitConfig(UNIT_SYSTEMS.METRIC),
  unitSystem: UNIT_SYSTEMS.METRIC,
};

export const DEFAULT_STATE = {
  current: null,
  daily: [],
  hourly: [],
  loading: false,
  error: null,
  latitude: DEFAULT_WEATHER_PARAMS.latitude,
  longitude: DEFAULT_WEATHER_PARAMS.longitude,
  locationLabel: DEFAULT_WEATHER_PARAMS.locationLabel,
  unitSystem: DEFAULT_WEATHER_PARAMS.unitSystem,
  units: DEFAULT_WEATHER_PARAMS.units,
};

// =========================================================
//                  WEATHER PROVIDER
// =========================================================
export function WeatherProvider({ children }: { children: ReactNode }) {
  // ---------- RAW DATA ----------
  const [rawCurrent, setRawCurrent] = useState<CurrentWeather | null>(null);
  const [rawHourly, setRawHourly] = useState<HourlyWeather[]>([]);
  const [rawDaily, setRawDaily] = useState<DailyForecast[]>([]);

  // ---------- TRANSFORMED / UI STATE ----------
  const [state, setState] =
    useState<
      Omit<
        WeatherState,
        | "setLocation"
        | "setUnits"
        | "setUnitSystem"
        | "setSelectedDate"
        | "selectedDate"
      >
    >(DEFAULT_STATE);

  const [selectedDate, setSelectedDate] = useState(new Date());

  // =========================================================
  //                    SETTERS
  // =========================================================
  const setUnitSystem = (system: UnitSystem) => {
    setState((prev) => ({
      ...prev,
      unitSystem: system,
      units: getUnitConfig(system),
    }));
  };

  const setUnits = (type: UnitType, unit: string) => {
    setState((prev) => ({ ...prev, units: { ...prev.units, [type]: unit } }));
  };

  const setLocation = (lat: number, lon: number, label: string) => {
    setState((prev) => ({
      ...prev,
      latitude: lat,
      longitude: lon,
      locationLabel: label,
    }));
  };

  // =========================================================
  //                    FETCH WEATHER
  // =========================================================
  useEffect(() => {
    if (state.latitude == null || state.longitude == null) return;

    const fetchWeather = async () => {
      try {
        setState((s) => ({ ...s, loading: true, error: null }));

        const params = {
          latitude: state.latitude,
          longitude: state.longitude,
          daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
          hourly: ["temperature_2m", "weather_code"],
          current: [
            "weather_code",
            "temperature_2m",
            "apparent_temperature",
            "relative_humidity_2m",
            "wind_speed_10m",
            "precipitation",
          ],
        };

        const url = "https://api.open-meteo.com/v1/forecast";
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];

        const currentRaw = response.current()!;
        const hourlyRaw = response.hourly()!;
        const dailyRaw = response.daily()!;

        // ---------- CURRENT ----------
        const rawCurrentData: CurrentWeather = {
          weather_code: currentRaw.variables(0)?.value() ?? null,
          temperature_2m: currentRaw.variables(1)?.value() ?? null,
          apparent_temperature: currentRaw.variables(2)?.value() ?? null,
          relative_humidity_2m: currentRaw.variables(3)?.value() ?? null,
          wind_speed_10m: currentRaw.variables(4)?.value() ?? null,
          precipitation: currentRaw.variables(5)?.value() ?? null,
          weather: currentRaw.variables(0)
            ? getWeatherFromCode(currentRaw.variables(0)!.value())
            : null,
        };

        // ---------- HOURLY ----------
        const now = new Date();
        const hourlyCount =
          (Number(hourlyRaw.timeEnd()) - Number(hourlyRaw.time())) /
          hourlyRaw.interval();

        // Get selected day start timestamp
        const selectedStart =
          new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate()
          ).getTime() / 1000; // convert to seconds to match API times

        // Get selected day end timestamp
        const selectedEnd = selectedStart + 24 * 3600; // 24 hours later

        const temps = hourlyRaw.variables(0)?.valuesArray() ?? [];
        const weatherCodes = hourlyRaw.variables(1)?.valuesArray() ?? [];

        const rawHourlyData: HourlyWeather[] = [];

        // Iterate API hours
        for (let i = 0; i < hourlyCount; i++) {
          const apiTime = Number(hourlyRaw.time()) + i * hourlyRaw.interval();

          // Only include hours in the selected day
          if (apiTime < selectedStart || apiTime >= selectedEnd) continue;

          // Today: skip past hours
          if (
            selectedDate.toDateString() === now.toDateString() &&
            apiTime * 1000 < now.getTime()
          )
            continue;

          rawHourlyData.push({
            timeLabel: new Date(apiTime * 1000).toLocaleTimeString("en-US", {
              hour: "numeric",
              hour12: true,
            }),
            temperature: temps[i] ?? null,
            weather:
              weatherCodes[i] != null
                ? getWeatherFromCode(weatherCodes[i])
                : null,
          });
        }

        // ---------- DAILY ----------
        const dailyCount =
          (Number(dailyRaw.timeEnd()) - Number(dailyRaw.time())) /
          dailyRaw.interval();

        const dayCodes = dailyRaw.variables(0)?.valuesArray() ?? [];
        const maxTemps = dailyRaw.variables(1)?.valuesArray() ?? [];
        const minTemps = dailyRaw.variables(2)?.valuesArray() ?? [];

        const rawDailyData: DailyForecast[] = [...Array(dailyCount)].map(
          (_, i) => {
            const date = new Date(
              (Number(dailyRaw.time()) + i * dailyRaw.interval()) * 1000
            );

            return {
              day: date.toLocaleDateString("en-US", {
                weekday: "short",
              }) as Day,
              weather:
                dayCodes[i] != null ? getWeatherFromCode(dayCodes[i]) : null,
              max_temp: maxTemps[i] ?? null,
              min_temp: minTemps[i] ?? null,
              date, // ✅ include full date for dropdown / comparison
            } as DailyForecast & { date: Date };
          }
        );

        // Save raw only
        setRawCurrent(rawCurrentData);
        setRawHourly(rawHourlyData);
        setRawDaily(rawDailyData);

        setState((prev) => ({
          ...prev,
          loading: false,
          error: null,
        }));
      } catch {
        setState((s) => ({
          ...s,
          loading: false,
          error: "Unable to load weather data",
        }));
      }
    };

    fetchWeather();
  }, [state.latitude, state.longitude, selectedDate]);

  // =========================================================
  //   TRANSFORM DATA ONLY WHEN UNITS OR RAW CHANGE
  // =========================================================
  useEffect(() => {
    if (!rawCurrent) return;

    const current: CurrentWeather = {
      ...rawCurrent,
      temperature_2m:
        rawCurrent.temperature_2m != null
          ? convertValue(
              "temperature",
              rawCurrent.temperature_2m,
              state.units.temperature
            )
          : null,
      apparent_temperature:
        rawCurrent.apparent_temperature != null
          ? convertValue(
              "temperature",
              rawCurrent.apparent_temperature,
              state.units.temperature
            )
          : null,
      wind_speed_10m:
        rawCurrent.wind_speed_10m != null
          ? convertValue(
              "windSpeed",
              rawCurrent.wind_speed_10m,
              state.units.windSpeed
            )
          : null,
      precipitation:
        rawCurrent.precipitation != null
          ? convertValue(
              "precipitation",
              rawCurrent.precipitation,
              state.units.precipitation
            )
          : null,
    };

    const hourly = rawHourly.map((h) => ({
      ...h,
      temperature:
        h.temperature != null
          ? convertValue("temperature", h.temperature, state.units.temperature)
          : null,
    }));

    const daily = rawDaily.map((d) => ({
      ...d,
      max_temp:
        d.max_temp != null
          ? convertValue("temperature", d.max_temp, state.units.temperature)
          : null,
      min_temp:
        d.min_temp != null
          ? convertValue("temperature", d.min_temp, state.units.temperature)
          : null,
    }));

    setState((prev) => ({
      ...prev,
      current,
      hourly,
      daily,
    }));
  }, [rawCurrent, rawHourly, rawDaily, state.units]);

  // TODO: add no search result ui
  if (!state.current || !state.daily || !state.hourly) {
    return null;
  }

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        setLocation,
        setUnitSystem,
        setUnits,

        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
