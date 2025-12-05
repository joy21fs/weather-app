import {
  TEMPERATURE_UNITS,
  WIND_SPEED_UNITS,
  PRECIPITATION_UNITS,
  type UnitType,
} from "~/types/units";

type TempUnit = (typeof TEMPERATURE_UNITS)[keyof typeof TEMPERATURE_UNITS];
type WindUnit = (typeof WIND_SPEED_UNITS)[keyof typeof WIND_SPEED_UNITS];
type PrecipUnit =
  (typeof PRECIPITATION_UNITS)[keyof typeof PRECIPITATION_UNITS];

export function convertTemperature(value: number, toUnit: TempUnit) {
  if (toUnit === TEMPERATURE_UNITS.FAHRENHEIT)
    return Math.round(value * 1.8 + 32);

  if (toUnit === TEMPERATURE_UNITS.CELSIUS) return Math.round(value);

  return value;
}

export function convertWindSpeed(value: number, toUnit: WindUnit) {
  if (toUnit === WIND_SPEED_UNITS.MPH) return Math.round(value / 1.609);

  if (toUnit === WIND_SPEED_UNITS.KMPH) return Math.round(value);

  return value;
}

export function convertPrecipitation(value: number, toUnit: PrecipUnit) {
  if (toUnit === PRECIPITATION_UNITS.INCHES) return Math.round(value / 25.4);

  if (toUnit === PRECIPITATION_UNITS.MM) return Math.round(value);

  return value;
}

export function convertValue(type: UnitType, value: number, toUnit: string) {
  switch (type) {
    case "temperature":
      return convertTemperature(value, toUnit as TempUnit);
    case "windSpeed":
      return convertWindSpeed(value, toUnit as WindUnit);
    case "precipitation":
      return convertPrecipitation(value, toUnit as PrecipUnit);
    default:
      return value;
  }
}
