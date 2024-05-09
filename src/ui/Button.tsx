import clsx from "clsx";
import { ReactNode } from "react";

export type VariantBtn = "main" | "mainLight" | "reset";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: VariantBtn;
}

const Button = (props: ReactTagProps<"button"> & ButtonProps) => {
  const { className, children, onClick, variant = "main" } = props;

  return (
    <button
      className={clsx(
        className,
        {
          main: "btn hover:text-accent-lightYellow hover:bg-accent-darkYellowHover bg-accent-lightYellow",
          mainLight: "btn bg-accent-light hover:bg-accent-dark hover:text-opacity-80",
          reset: "text",
        }[variant],
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
