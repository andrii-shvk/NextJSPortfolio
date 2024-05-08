import clsx from "clsx";
import { ReactNode } from "react";

export type VariantBtn = "main" | "reset";

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
          main: "text hover:text-white-light bg-accent-light px-4 py-2 transition-colors delay-75 dark:bg-accent-dark",
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
