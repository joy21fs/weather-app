import type { Meta, StoryObj } from "@storybook/react";
import WeatherSummary from "./WeatherSummary";

const meta: Meta<typeof WeatherSummary> = {
  title: "Blocks/WeatherSummary",
  component: WeatherSummary,
  decorators: [
    (Story) => (
      <div
        style={{
          width: window.innerWidth <= 960 ? "100%" : "auto",
          display: "flex",
          justifyContent: window.innerWidth <= 960 ? "center" : "flex-start",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WeatherSummary>;

export const Default: Story = {
  args: {
    location: "London",
    date: new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    weather: "foggy",
    currentTemperature: 60,
    apparent_temperature: "64°",
    wind_speed_10m: "9 mph",
    relative_humidity_2m: "46%",
    precipitation: "0 mm",
  },
};

Default.storyName = "WeatherSummary";
