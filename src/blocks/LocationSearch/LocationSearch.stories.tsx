import type { Meta, StoryObj } from "@storybook/react";
import LocationSearch from "./LocationSearch";

const meta: Meta<typeof LocationSearch> = {
  title: "Blocks/LocationSearch",
  component: LocationSearch,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LocationSearch>;

export const Default: Story = {};

Default.storyName = "LocationSearch";
