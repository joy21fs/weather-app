import Button from "../Button";
import Dropdown from "./Dropdown";
import type { Meta, StoryObj } from "@storybook/react";

import dropdownIcon from "../../assets/icon-dropdown.svg";
import { useArgs } from "storybook/internal/preview-api";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: (
      <Button variant='trigger-days' rightIcon={dropdownIcon}>
        Monday
      </Button>
    ),
  },
  render: function Renderer(args) {
    const [{ trigger }, updateArgs] = useArgs();
    const handleSelect = (value: string) => {
      updateArgs({
        trigger: (
          <Button variant='trigger-days' rightIcon={dropdownIcon}>
            {value}
          </Button>
        ),
      });
    };

    return (
      <Dropdown {...args} trigger={trigger}>
        {(close: () => void) => (
          <>
            <Button
              variant='dropdown'
              current={trigger.props.children === "Monday"}
              onClick={() => {
                handleSelect("Monday");
                close();
              }}
            >
              Monday
            </Button>
            <Button
              variant='dropdown'
              current={trigger.props.children === "Tuesday"}
              onClick={() => {
                handleSelect("Tuesday");
                close();
              }}
            >
              Tuesday
            </Button>
          </>
        )}
      </Dropdown>
    );
  },
};
