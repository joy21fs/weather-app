import type { Meta, StoryObj } from "@storybook/react";
import ErrorFallback from "./ErrorFallback";

const meta: Meta<typeof ErrorFallback> = {
  title: "Components/ErrorFallback",
  component: ErrorFallback,
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
type Story = StoryObj<typeof ErrorFallback>;

export const Default: Story = {};
Default.storyName = "ErrorFallback";
