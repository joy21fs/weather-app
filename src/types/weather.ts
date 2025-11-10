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
  temperature: number;
  weather: Weather;
  time: string;
};

export interface WeatherParms {
  latitude: number;
  longitude: number;
  weather_code: number;
  temperature_2m: number;
  apparent_temperature: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  precipitation: number;
}
