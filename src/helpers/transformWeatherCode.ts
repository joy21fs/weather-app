import type { Weather } from "~/types/weather";

export function getWeatherFromCode(code: number): Weather {
  // No precipitation codes 0-49 (but subdivided)
  if (code === 0) return "sunny";
  if (code === 1 || code === 2) return "partlyCloudy";
  if (code === 3) return "cloudy";
  if ((code >= 10 && code <= 12) || (code >= 40 && code <= 49)) return "foggy";

  // Drizzle codes
  if ((code >= 20 && code <= 20) || (code >= 50 && code <= 59))
    return "drizzly";

  // Rain codes
  if (
    (code >= 21 && code <= 21) ||
    (code >= 60 && code <= 69) ||
    (code >= 25 && code <= 26) ||
    (code >= 80 && code <= 84)
  )
    return "rainy";

  // Snow codes
  if (
    (code >= 22 && code <= 22) ||
    (code >= 70 && code <= 79) ||
    (code >= 85 && code <= 86)
  )
    return "snowy";

  // Storm codes
  if ((code >= 27 && code <= 27) || (code >= 90 && code <= 99)) return "stormy";

  // Catch-all fallback
  return "sunny";
}
