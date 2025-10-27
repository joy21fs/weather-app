import Button from "../Button";
import type { Meta, StoryObj } from "@storybook/react";
import DropdownMenu from "./DropdownMenu";
import checkIcon from "../../assets/icon-checkmark.svg";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button variant='dropdown' current={true}>
          Monday
        </Button>
        <Button variant='dropdown' current={false}>
          Tuesday
        </Button>
      </>
    ),
  },
};

export const Units: Story = {
  args: {
    variant: "units",
    children: (
      <>
        <Button>Switch to Metrics</Button>
        <span
          style={{
            color: "var(--color-neutral-300)",
            fontFamily: "var(--text-preset-8-font-family)",
            fontSize: "var(--text-preset-8-font-size",
            padding: "6px 8px",
          }}
        >
          temperature
        </span>
        <Button variant='dropdown' current={false}>
          Celsius (°C)
        </Button>
        <Button variant='dropdown' current={true} rightIcon={checkIcon}>
          Fahrenheit (°F)
        </Button>
      </>
    ),
  },
};
