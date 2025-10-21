import { bindCssModule } from "../../helpers/css";
import css from "./Button.module.css";
import checkIcon from "../../assets/icon-checkmark.svg";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
  current?: boolean;
}

const cx = bindCssModule(css, "Button");

export default function Button(props: Props) {
  const { className, children, current = false, onClick } = props;

  return (
    <button
      type='button'
      className={cx(className, current ? "current" : "")}
      onClick={onClick}
    >
      <>
        {children}
        {current ? <img src={checkIcon} /> : <></>}
      </>
    </button>
  );
}
