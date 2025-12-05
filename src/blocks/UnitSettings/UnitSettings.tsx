import { useTranslation } from "react-i18next";
import Dropdown from "~/components/Dropdown";
import DropdownTriggerButton from "~/components/Dropdown/DropdownTriggerButton";
import Button from "~/components/Button";
import settingsIcon from "~/assets/icon-units.svg";
import checkIcon from "~/assets/icon-checkmark.svg";
import css from "./UnitSettings.module.css";

import {
  UNIT_SYSTEMS,
  TEMPERATURE_UNITS,
  WIND_SPEED_UNITS,
  PRECIPITATION_UNITS,
  toggleUnitSystem,
  type UnitType,
} from "~/types/units";
import { useWeather } from "~/contexts/WeatherContext";

export default function UnitSettings() {
  const { t } = useTranslation("", { keyPrefix: "unitSettings" });
  const { unitSystem, units, setUnitSystem, setUnits } = useWeather();

  const unitOptions: Record<UnitType, string[]> = {
    temperature: Object.values(TEMPERATURE_UNITS),
    windSpeed: Object.values(WIND_SPEED_UNITS),
    precipitation: Object.values(PRECIPITATION_UNITS),
  };

  const handleSwitchSystem = () => {
    setUnitSystem(toggleUnitSystem(unitSystem));
  };

  const handleSetUnit = (type: UnitType, unit: string) => {
    setUnits(type, unit);
  };

  return (
    <Dropdown
      trigger={
        <DropdownTriggerButton variant='trigger-units' leftIcon={settingsIcon}>
          {t("dropdownTriggerButton")}
        </DropdownTriggerButton>
      }
    >
      <Button onClick={handleSwitchSystem} className={css.toggleBtn}>
        {t("switch", {
          unitSystem:
            unitSystem === UNIT_SYSTEMS.METRIC
              ? UNIT_SYSTEMS.IMPERIAL
              : UNIT_SYSTEMS.METRIC,
        })}
      </Button>
      <div className={css.unitControlSection}>
        {(Object.keys(unitOptions) as UnitType[]).map((type) => (
          <div key={type} className={css.unitControlBlock}>
            <span className={css.unitOption}>{t(`controls.${type}`)}</span>
            {unitOptions[type].map((unit) => (
              <Button
                key={unit}
                variant='option'
                current={unit === units[type]}
                onClick={() => handleSetUnit(type, unit)}
                rightIcon={unit === units[type] ? checkIcon : undefined}
              >
                {unit}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </Dropdown>
  );
}
