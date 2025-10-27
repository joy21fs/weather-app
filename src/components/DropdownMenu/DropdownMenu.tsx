import type { ReactNode } from "react";
import css from "./DropdownMenu.module.css";
import { bindCssModule } from "../../helpers/css";

interface Props {
  variant?: "units";
  children: ReactNode;
}

const cx = bindCssModule(css, "DropdownMenu");

export default function DropdownMenu(props: Props) {
  const { variant, children } = props;
  return <div className={cx(variant)}>{children}</div>;
}
