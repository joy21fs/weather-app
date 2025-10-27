import React, { useRef } from "react";
import Popup from "reactjs-popup";
import css from "./Dropdown.module.css";

import type { PopupActions, PopupProps } from "reactjs-popup/dist/types";
import DropdownMenu from "../DropdownMenu";

type Close = () => void;

interface DropdownProps extends Omit<PopupProps, "children"> {
  children: React.ReactNode | ((close: Close) => React.ReactNode);
  variant?: "units";
}

export default function Dropdown({
  trigger,
  children,
  position = "bottom right",
  variant,
}: DropdownProps) {
  const ref = useRef<PopupActions>(null);
  const close: Close = () => ref.current?.close();

  return (
    <Popup
      ref={ref}
      className={css.popup}
      trigger={trigger}
      arrow={false}
      position={position}
      offsetY={8}
    >
      <DropdownMenu variant={variant}>
        {typeof children === "function" ? children(close) : children}
      </DropdownMenu>
    </Popup>
  );
}
