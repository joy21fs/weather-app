import type { Meta, StoryObj } from "@storybook/react";
import HourlyForecast from "./HourlyForecast";

const meta: Meta<typeof HourlyForecast> = {
  title: "Blocks/HourlyForecast",
  component: HourlyForecast,
};

export default meta;
type Story = StoryObj<typeof HourlyForecast>;

export const Default: Story = {
  args: {
    hours: [
      {
        weather: "stormy",
        temperature: 58,
        timeLabel: "3 PM",
      },
      {
        weather: "rainy",
        temperature: 55,
        timeLabel: "4 PM",
      },
    ],
  },
};

Default.storyName = "HourlyForecast";
