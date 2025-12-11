import Dropdown from "./Dropdown";
import type { Meta, StoryObj } from "@storybook/react";

import dropdownIcon from "../../assets/icon-dropdown.svg";
import { useArgs } from "storybook/preview-api";
import DropdownTriggerButton from "./DropdownTriggerButton";
import Button from "../Button";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
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
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: (
      <DropdownTriggerButton variant='trigger-days' rightIcon={dropdownIcon}>
        Monday
      </DropdownTriggerButton>
    ),
  },
  parameters: {
    weatherProviderOn: false,
  },
  render: function Renderer(args) {
    const [{ trigger }, updateArgs] = useArgs();
    const handleSelect = (value: string) => {
      updateArgs({
        trigger: (
          <DropdownTriggerButton
            variant='trigger-days'
            rightIcon={dropdownIcon}
          >
            {value}
          </DropdownTriggerButton>
        ),
      });
    };

    return (
      <Dropdown {...args} trigger={trigger}>
        {(close: () => void) => (
          <>
            <Button
              variant='option'
              current={trigger.props.children === "Monday"}
              onClick={() => {
                handleSelect("Monday");
                close();
              }}
            >
              Monday
            </Button>
            <Button
              variant='option'
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

Default.storyName = "Dropdown";
