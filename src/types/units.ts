export type Unit = "imperial" | "metric";
export const UNIT_SYSTEMS = {
  METRIC: "Metric",
  IMPERIAL: "Imperial",
} as const;

export const TEMPERATURE_UNITS = {
  CELSIUS: "Celsius (°C)",
  FAHRENHEIT: "Fahrenheit (°F)",
} as const;

export const WIND_SPEED_UNITS = {
  KMPH: "km/h",
  MPH: "mph",
} as const;

export const PRECIPITATION_UNITS = {
  MM: "Millimeters (mm)",
  INCHES: "Inches (in)",
} as const;

export type UnitSystem = (typeof UNIT_SYSTEMS)[keyof typeof UNIT_SYSTEMS];
export type TemperatureUnit =
  (typeof TEMPERATURE_UNITS)[keyof typeof TEMPERATURE_UNITS];
export type WindSpeedUnit =
  (typeof WIND_SPEED_UNITS)[keyof typeof WIND_SPEED_UNITS];
export type PrecipiationUnit =
  (typeof PRECIPITATION_UNITS)[keyof typeof PRECIPITATION_UNITS];

export const UNIT_CONFIGS: Record<
  UnitSystem,
  {
    temperature: TemperatureUnit;
    windSpeed: WindSpeedUnit;
    precipitation: PrecipiationUnit;
  }
> = {
  [UNIT_SYSTEMS.METRIC]: {
    temperature: TEMPERATURE_UNITS.CELSIUS,
    windSpeed: WIND_SPEED_UNITS.KMPH,
    precipitation: PRECIPITATION_UNITS.MM,
  },
  [UNIT_SYSTEMS.IMPERIAL]: {
    temperature: TEMPERATURE_UNITS.FAHRENHEIT,
    windSpeed: WIND_SPEED_UNITS.MPH,
    precipitation: PRECIPITATION_UNITS.INCHES,
  },
};

export function getUnitConfig(system: UnitSystem) {
  return UNIT_CONFIGS[system];
}

export function toggleUnitSystem(system: UnitSystem): UnitSystem {
  return system === UNIT_SYSTEMS.METRIC
    ? UNIT_SYSTEMS.IMPERIAL
    : UNIT_SYSTEMS.METRIC;
}
