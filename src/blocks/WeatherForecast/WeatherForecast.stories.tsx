import type { Meta, StoryObj } from "@storybook/react";
import WeatherForecast from "./WeatherForecast";

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

Default.storyName = "WeatherForecast";
