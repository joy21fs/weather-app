import type { Meta, StoryObj } from "@storybook/react";
import DailyForecast from "./DailyForecast";

const meta: Meta<typeof DailyForecast> = {
  title: "Blocks/DailyForecast",
  component: DailyForecast,
};

export default meta;
type Story = StoryObj<typeof DailyForecast>;

export const Default: Story = {
  args: {
    startDay: "Tue",
    forecasts: [
      {
        day: "Mon",
        weather: "cloudy",
        max_temp: 25,
        min_temp: 18,
        date: new Date("2025/12/08"),
      },
      {
        day: "Tue",
        weather: "drizzly",
        max_temp: 27,
        min_temp: 19,
        date: new Date("2025/12/09"),
      },
      {
        day: "Wed",
        weather: "foggy",
        max_temp: 26,
        min_temp: 17,
        date: new Date("2025/12/10"),
      },
      {
        day: "Thu",
        weather: "partlyCloudy",
        max_temp: 22,
        min_temp: 16,
        date: new Date("2025/12/11"),
      },
      {
        day: "Fri",
        weather: "rainy",
        max_temp: 20,
        min_temp: 15,
        date: new Date("2025/12/12"),
      },
      {
        day: "Sat",
        weather: "snowy",
        max_temp: 28,
        min_temp: 20,
        date: new Date("2025/12/13"),
      },
      {
        day: "Sun",
        weather: "stormy",
        max_temp: 24,
        min_temp: 18,
        date: new Date("2025/12/14"),
      },
    ],
  },
};

Default.storyName = "DailyForecast";
