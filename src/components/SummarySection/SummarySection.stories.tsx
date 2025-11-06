import type { Meta, StoryObj } from "@storybook/react";
import SummarySection from "./SummarySection";

const meta: Meta<typeof SummarySection> = {
  title: "Components/SummarySection",
  component: SummarySection,
};

export default meta;
type Story = StoryObj<typeof SummarySection>;

export const Default: Story = {
  args: {
    location: "Berlin, Germany",
    date: "Tuesday, Aug 5, 2025",
    weather: "sunny",
    currentTemperature: 20,
  },
};

Default.storyName = "SummarySection";
