import { bindCssModule } from "../../helpers/css";
import css from "./Button.module.css";
import type { ReactElement } from "react";

type Icon = ReactElement | string;

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
  leftIcon?: Icon;
  rightIcon?: Icon;
  variant?: "dropdown" | "trigger-units" | "trigger-days" | "search";
  current?: boolean;
}

const cx = bindCssModule(css, "Button");

export default function Button(props: Props) {
  const {
    className,
    children,
    leftIcon,
    rightIcon,
    variant,
    current,
    onClick,
  } = props;

  const buttonClassName = cx(
    className,
    variant ? css[variant] : undefined,
    current ? css.current : undefined
  );

  return (
    <button type='button' className={buttonClassName} onClick={onClick}>
      {leftIcon && icon(leftIcon)}
      {children}
      {rightIcon && icon(rightIcon)}
    </button>
  );
}

const icon = (icon: Icon) => {
  return typeof icon === "string" ? <img src={icon} alt='' /> : icon;
};
