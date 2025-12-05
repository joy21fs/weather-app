import Button from "~/components/Button";
import Dropdown from "~/components/Dropdown";
import DropdownTriggerButton from "~/components/Dropdown/DropdownTriggerButton";
import { useWeather } from "~/contexts/WeatherContext";

export default function DayDropdown() {
  const { daily, selectedDate, setSelectedDate } = useWeather();
  const selectedDay = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <Dropdown
      trigger={
        <DropdownTriggerButton variant='trigger-days'>
          {selectedDay}
        </DropdownTriggerButton>
      }
    >
      {(close) =>
        daily.map(({ date, day }) => (
          <Button
            key={day}
            variant='option'
            current={selectedDate === date}
            onClick={() => {
              setSelectedDate(date);
              close();
            }}
          >
            {date.toLocaleDateString("en-US", { weekday: "long" })}
          </Button>
        ))
      }
    </Dropdown>
  );
}
