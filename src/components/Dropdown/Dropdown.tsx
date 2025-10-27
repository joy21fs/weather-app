import React, { useRef } from "react";
import Popup from "reactjs-popup";
import css from "./Dropdown.module.css";

import type { PopupActions, PopupProps } from "reactjs-popup/dist/types";

type Close = () => void;

interface DropdownProps extends Omit<PopupProps, "children"> {
  children: React.ReactNode | ((close: Close) => React.ReactNode);
}

export default function Dropdown({
  trigger,
  children,
  position = "bottom right",
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
      <div className={css.Dropdown}>
        {typeof children === "function" ? children(close) : children}
      </div>
    </Popup>
  );
}
