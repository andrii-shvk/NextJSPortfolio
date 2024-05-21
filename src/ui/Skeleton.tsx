import clsx from "clsx";
import { ReactNode } from "react";

interface SkeletonProps {
  className?: string;
  children?: ReactNode;
}

const Skeleton = (props: SkeletonProps) => {
  const { className, children } = props;

  return (
    <div
      className={clsx(
        "skeleton rounded-lg dark:bg-skeleton-gradientDark dark:shadow-[0_2px_10px_0px_bg-skeleton-gradientDark]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export { Skeleton };