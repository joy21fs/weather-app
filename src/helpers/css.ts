import classNames from "classnames/bind";

type CSSModule = { [key: string]: string };
type BindCssModule = (
  css: CSSModule,
  baseClassName: string
) => ClassNamesHelper;
type ClassName = { [key: string]: boolean } | string | undefined;
type ClassNamesHelper = (...classNames: ClassName[]) => string;

export const bindCssModule: BindCssModule = (css, baseClassName) => {
  const cx = classNames.bind(css);

  return (...args) => {
    const classes = args.map((arg) =>
      typeof arg === "string" ? arg.split(" ") : arg
    );
    return cx(baseClassName, ...classes);
  };
};
