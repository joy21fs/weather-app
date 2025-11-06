import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import checkIcon from "../../assets/icon-checkmark.svg";
import unitsIcon from "../../assets/icon-units.svg";
import dropdownIcon from "../../assets/icon-dropdown.svg";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
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
    children: "Switch to Metrics",
  },
};

export const Dropdown_DefaultOption: Story = {
  decorators: Default.decorators,
  args: {
    variant: "option",
    children: "Monday",
  },
};

export const Dropdown_CurrentOption: Story = {
  decorators: Default.decorators,
  args: {
    variant: "option",
    className: "current",
    children: "Celsius (°C)",
    rightIcon: <img src={checkIcon} />,
  },
};

export const Units_DropdownTriggerButton: Story = {
  args: {
    variant: "trigger-units",
    children: "Units",
    leftIcon: <img src={unitsIcon} />,
    rightIcon: <img src={dropdownIcon} />,
  },
};

export const Days_DropdownTriggerButton: Story = {
  args: {
    variant: "trigger-days",
    children: <span>Monday</span>,
    rightIcon: <img src={dropdownIcon} />,
  },
};

export const Search: Story = {
  args: {
    variant: "search",
    children: "Search",
  },
};
