import css from "./Button.module.css";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
}

export default function Button(props: Props) {
  const { children } = props;

  return (
    <button type='button' className={css.Button}>
      {children}
    </button>
  );
}
