import type { Meta, StoryObj } from "@storybook/react";
import UnitSettings from "./UnitSettings";

const meta: Meta<typeof UnitSettings> = {
  title: "Blocks/UnitSettings",
  component: UnitSettings,
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
type Story = StoryObj<typeof UnitSettings>;

export const Default: Story = {};

Default.storyName = "UnitSettings";
