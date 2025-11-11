import { useState } from "react";
import Button from "~/components/Button";
import Dropdown from "~/components/Dropdown";
import dropdownIcon from "~/assets/icon-dropdown.svg";
import DropdownTriggerButton from "~/components/Dropdown/DropdownTriggerButton";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function DayDropdown() {
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });
  const [selected, setSelected] = useState(currentDay);

  return (
    <Dropdown
      trigger={
        <DropdownTriggerButton variant='trigger-days' rightIcon={dropdownIcon}>
          {selected}
        </DropdownTriggerButton>
      }
    >
      {(close) =>
        DAYS.map((day) => (
          <Button
            key={day}
            variant='option'
            current={selected === day}
            onClick={() => {
              setSelected(day);
              close();
            }}
          >
            {day}
          </Button>
        ))
      }
    </Dropdown>
  );
}
