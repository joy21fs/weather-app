import type { Meta, StoryObj } from "@storybook/react";
import InfoCard from "./InfoCard";

const meta: Meta<typeof InfoCard> = {
  title: "Components/InfoCard",
  component: InfoCard,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "var(--color-neutral-900)",
          height: "100vh",
          padding: "10px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
  args: {
    infoName: "precipitation",
    value: "0 mm",
  },
};

Default.storyName = "InfoCard";
