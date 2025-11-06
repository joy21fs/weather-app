import sunny from "~/assets/icon-sunny.webp";
import cloudy from "~/assets/icon-overcast.webp";
import partlyCloudy from "~/assets/icon-partly-cloudy.webp";
import foggy from "~/assets/icon-fog.webp";
import snowy from "~/assets/icon-snow.webp";
import drizzly from "~/assets/icon-drizzle.webp";
import rainy from "~/assets/icon-rain.webp";
import stormy from "~/assets/icon-snow.webp";
import type { Weather } from "~/types/weather";

const ICONS: Record<Weather, string> = {
  sunny,
  cloudy,
  partlyCloudy,
  foggy,
  snowy,
  drizzly,
  rainy,
  stormy,
};

interface Props {
  weather: Weather;
}

export default function WeatherIcon({ weather }: Props) {
  return <img src={ICONS[weather]} alt={weather} />;
}
