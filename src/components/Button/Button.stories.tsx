import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Dropdown_Default: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "var(--color-neutral-800)",
          height: "100vh",
          padding: "8px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    className: "dropdown",
    children: "Monday",
  },
};

export const Dropdown_CurrentOption: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "var(--color-neutral-800)",
          height: "100vh",
          padding: "8px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    className: "dropdown",
    children: "Monday",
    current: true,
  },
};

export const Search: Story = {
  args: {
    className: "search",
    children: "Search",
  },
};
