import React, { forwardRef } from "react";
import Button from "~/components/Button";
import dropdownIcon from "~/assets/icon-dropdown.svg";

type DropdownTriggerButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

const DropdownTriggerButton = forwardRef<
  HTMLButtonElement,
  DropdownTriggerButtonProps
>((props, ref) => {
  return <Button ref={ref} {...props} rightIcon={dropdownIcon} />;
});

DropdownTriggerButton.displayName = "DropdownTriggerButton";

export default DropdownTriggerButton;
