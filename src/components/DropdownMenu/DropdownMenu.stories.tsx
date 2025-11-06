import Button from "../Button";
import type { Meta, StoryObj } from "@storybook/react";
import DropdownMenu from "./DropdownMenu";
import checkIcon from "../../assets/icon-checkmark.svg";
import { useState } from "storybook/internal/preview-api";
import {
  TEMPERATURE_UNITS,
  UNIT_SYSTEMS,
  type UnitSystem,
  type TemperatureUnit,
} from "~/types/units";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: function Renderer() {
    const [currentDay, setCurrentDay] = useState("Monday");

    return (
      <DropdownMenu>
        {["Monday", "Tuesday"].map((day) => (
          <Button
            key={day}
            variant='option'
            current={day === currentDay}
            onClick={() => setCurrentDay(day)}
          >
            {day}
          </Button>
        ))}
      </DropdownMenu>
    );
  },
};

export const Units: Story = {
  render: function Renderer() {
    const [currentTemperatureUnit, setCurrentTemperatureUnit] =
      useState<TemperatureUnit>(TEMPERATURE_UNITS.CELSIUS);
    const [currentSystemUnit, setCurrentSystemUnit] = useState<UnitSystem>(
      UNIT_SYSTEMS.IMPERIAL
    );

    const temperatureValues = Object.values(TEMPERATURE_UNITS);

    return (
      <DropdownMenu>
        <Button
          onClick={() => {
            setCurrentSystemUnit((pre) =>
              pre === UNIT_SYSTEMS.IMPERIAL
                ? UNIT_SYSTEMS.METRIC
                : UNIT_SYSTEMS.IMPERIAL
            );
            setCurrentTemperatureUnit(() =>
              currentSystemUnit === UNIT_SYSTEMS.IMPERIAL
                ? TEMPERATURE_UNITS.CELSIUS
                : TEMPERATURE_UNITS.FAHRENHEIT
            );
          }}
        >
          {`Switch to ${
            currentSystemUnit === UNIT_SYSTEMS.METRIC
              ? UNIT_SYSTEMS.IMPERIAL
              : UNIT_SYSTEMS.METRIC
          }`}
        </Button>
        <span
          style={{
            color: "var(--color-neutral-300)",
            font: "var(--font-8)",
            padding: "6px 8px",
          }}
        >
          Temperature
        </span>
        {temperatureValues.map((unit) => (
          <Button
            key={unit}
            variant='option'
            current={unit === currentTemperatureUnit}
            onClick={() => setCurrentTemperatureUnit(unit)}
            rightIcon={unit === currentTemperatureUnit ? checkIcon : undefined}
          >
            {unit}
          </Button>
        ))}
      </DropdownMenu>
    );
  },
  args: {
    variant: "units",
  },
};
