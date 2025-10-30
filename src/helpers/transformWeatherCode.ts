import type { Weather } from "~/types/weather";

const WEATHER_CODE_MAP: Record<number, Weather> = {
  0: "sunny",

  1: "cloudy",
  2: "cloudy",
  3: "cloudy",

  45: "foggy",
  48: "foggy",

  51: "rainy",
  53: "rainy",
  55: "rainy",

  56: "rainy",
  57: "rainy",

  61: "rainy",
  63: "rainy",
  65: "rainy",

  66: "rainy",
  67: "rainy",

  71: "snowy",
  73: "snowy",
  75: "snowy",
  77: "snowy",

  80: "rainy",
  81: "rainy",
  82: "rainy",

  85: "snowy",
  86: "snowy",

  95: "stormy",
  96: "stormy",
  99: "stormy",
};

export function getWeatherFromCode(code: number): Weather {
  return WEATHER_CODE_MAP[code] ?? "sunny";
}
