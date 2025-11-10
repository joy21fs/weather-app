import type { Meta, StoryObj } from "@storybook/react";
import unitsIcon from "~/assets/icon-units.svg";
import DropdownTriggerButton from "./DropdownTriggerButton";

const meta: Meta<typeof DropdownTriggerButton> = {
  title: "Components/Dropdown/DropdownTriggerButton",
  component: DropdownTriggerButton,
};

export default meta;
type Story = StoryObj<typeof DropdownTriggerButton>;

export const Units: Story = {
  args: {
    variant: "trigger-units",
    children: "Units",
    leftIcon: <img src={unitsIcon} />,
  },
};

export const Days: Story = {
  args: {
    variant: "trigger-days",
    children: <span>Monday</span>,
  },
};
