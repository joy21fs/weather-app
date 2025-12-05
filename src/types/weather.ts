export type Weather =
  | "sunny"
  | "foggy"
  | "partlyCloudy"
  | "cloudy"
  | "drizzly"
  | "rainy"
  | "snowy"
  | "stormy";

export type HourlyWeather = {
  temperature: number | null;
  weather: Weather | null;
  timeLabel: string;
};

export interface WeatherParms {
  latitude: number;
  longitude: number;
  weather_code: number | null;

  temperature_2m: number | null;
  apparent_temperature: number | null;
  relative_humidity_2m: number | null;

  wind_speed_10m: number | null;
  precipitation: number | null;
}
