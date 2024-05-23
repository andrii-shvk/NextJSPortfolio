import clsx from "clsx";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = (props: MobileMenuProps) => {
  const { isOpen } = props;

  return (
    <div
      className={clsx(
        "bg-bgMenu-primary fixed bottom-0 right-0 top-0 z-[5] flex w-full translate-x-full justify-end transition-[0.5s]",
        {
          "translate-x-0": isOpen,
        },
      )}
    >
      hello
    </div>
  );
};

export { MobileMenu };
