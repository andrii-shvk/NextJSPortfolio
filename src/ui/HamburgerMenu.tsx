interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const HamburgerMenu = (props: HamburgerProps) => {
  const { isOpen, setIsOpen } = props;

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col items-center justify-center hover:opacity-80"
    >
      <span
        className={`hamburgerSpan ${
          isOpen ? "translate-y-[7px] rotate-45" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`hamburgerSpan my-0.5 duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`hamburgerSpan ${
          isOpen ? "-translate-y-[7px] -rotate-45" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export { HamburgerMenu };
