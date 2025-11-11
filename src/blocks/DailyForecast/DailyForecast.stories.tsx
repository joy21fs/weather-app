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
      { day: "Mon", weather_code: 3, max_temp: 25, min_temp: 18 },
      { day: "Tue", weather_code: 1, max_temp: 27, min_temp: 19 },
      { day: "Wed", weather_code: 2, max_temp: 26, min_temp: 17 },
      { day: "Thu", weather_code: 61, max_temp: 22, min_temp: 16 },
      { day: "Fri", weather_code: 80, max_temp: 20, min_temp: 15 },
      { day: "Sat", weather_code: 0, max_temp: 28, min_temp: 20 },
      { day: "Sun", weather_code: 45, max_temp: 24, min_temp: 18 },
    ],
  },
};

Default.storyName = "DailyForecast";
