import type { Meta, StoryObj } from "@storybook/react";
import WeatherForecast from "./WeatherForecast";
import { DEFAULT_STATE, WeatherContext } from "~/contexts/WeatherContext";
import { fromPartial } from "@total-typescript/shoehorn";

const meta: Meta<typeof WeatherForecast> = {
  title: "Blocks/WeatherForecast",
  component: WeatherForecast,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof WeatherForecast>;

export const Default: Story = {};

export const Error: Story = {
  decorators: [
    (Story) => (
      <WeatherContext.Provider
        value={fromPartial({ ...DEFAULT_STATE, error: "some error" })}
      >
        <Story />
      </WeatherContext.Provider>
    ),
  ],
};
