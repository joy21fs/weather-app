import type { Meta, StoryObj } from "@storybook/react";
import WeatherOverview from "./WeatherOverview";

const meta: Meta<typeof WeatherOverview> = {
  title: "Components/WeatherOverview",
  component: WeatherOverview,
  decorators: [
    (Story) => (
      <div style={{ display: "flex" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WeatherOverview>;

export const Default: Story = {
  args: {
    location: "Berlin, Germany",
    date: "Tuesday, Aug 5, 2025",
    weather: "sunny",
    currentTemperature: "20",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
