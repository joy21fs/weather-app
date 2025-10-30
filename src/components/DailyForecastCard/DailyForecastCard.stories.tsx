import type { Meta, StoryObj } from "@storybook/react";
import DailyForecastCard from "./DailyForecastCard";

const meta: Meta<typeof DailyForecastCard> = {
  title: "Components/DailyForecastCard",
  component: DailyForecastCard,
};

export default meta;
type Story = StoryObj<typeof DailyForecastCard>;

export const Default: Story = {
  args: {
    day: "Fri",
    max_temp: 25,
    min_temp: 16,
  },
};

Default.storyName = "DailyForecastCard";
