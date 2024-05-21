import clsx from "clsx";
import { ReactNode } from "react";

export type VariantBtn = "main" | "mainLight" | "filterBtn" | "reset";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: VariantBtn;
  dataFilter?: string;
  active?: boolean;
}

const Button = (props: ReactTagProps<"button"> & ButtonProps) => {
  const {
    className,
    children,
    onClick,
    variant = "main",
    dataFilter,
    active = false,
  } = props;
  return (
    <button
      className={clsx(
        className,
        {
          main: "btn bg-accent-lightYellow hover:bg-accent-darkYellowHover hover:text-accent-lightYellow",
          mainLight:
            "btn bg-accent-light hover:bg-accent-dark",
          filterBtn:
            "text-mixitUp-light hover:text-mixitUp-hover active:text-mixitUp-active dark:active:text-mixitUp-darkActive",
          reset: "text",
        }[variant],
        {
          ["text-text-light dark:text-mixitUp-darkActive"]: active
        },
      )}
      onClick={onClick}
      data-filter={dataFilter}
    >
      {children}
    </button>
  );
};

export { Button };
