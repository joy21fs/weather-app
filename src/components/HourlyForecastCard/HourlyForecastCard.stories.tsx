import type { Meta, StoryObj } from "@storybook/react";
import HourlyForecastCard from "./HourlyForecastCard";

const meta: Meta<typeof HourlyForecastCard> = {
  title: "Components/HourlyForecastCard",
  component: HourlyForecastCard,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "var(--color-neutral-900)",
          height: "100vh",
          padding: "24px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HourlyForecastCard>;

export const Default: Story = {
  args: {
    weather: "cloudy",
    timeLabel: "2 PM",
    temperature: 20,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
