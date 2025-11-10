import React, { forwardRef } from "react";
import { bindCssModule } from "../../helpers/css";
import css from "./Button.module.css";
import type { ReactElement } from "react";

type Icon = ReactElement | string;

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
  leftIcon?: Icon;
  rightIcon?: Icon;
  variant?: "option" | "trigger-units" | "trigger-days" | "search";
  current?: boolean;
}

const cx = bindCssModule(css, "Button");

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    className,
    children,
    leftIcon,
    rightIcon,
    variant,
    current,
    onClick,
    ...rest
  } = props;

  const buttonClassName = cx(
    className,
    variant ? css[variant] : undefined,
    current ? css.current : undefined
  );

  return (
    <button
      type='button'
      ref={ref}
      className={buttonClassName}
      onClick={onClick}
      {...rest}
    >
      {leftIcon && icon(leftIcon)}
      {children}
      {rightIcon && icon(rightIcon)}
    </button>
  );
});
export default Button;

const icon = (icon: Icon) => {
  return typeof icon === "string" ? <img src={icon} alt='' /> : icon;
};
