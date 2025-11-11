import type { Meta, StoryObj } from "@storybook/react";
import DayDropdown from "./DayDropdown";

const meta: Meta<typeof DayDropdown> = {
  title: "Blocks/DayDropdown",
  component: DayDropdown,
  decorators: [
    (Story) => (
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DayDropdown>;

export const Default: Story = {};

Default.storyName = "DayDropdown";
