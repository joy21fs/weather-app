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
