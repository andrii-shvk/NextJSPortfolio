interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const HamburgerMenu = (props: HamburgerProps) => {
  const { isOpen, setIsOpen } = props;

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col items-center justify-center"
    >
      <span
        className={`block h-[5px] w-10 bg-bg-dark transition-all duration-400 
                          ease-out ${
                            isOpen
                              ? "translate-y-[7px] rotate-45 dark:bg-bg-dark"
                              : "-translate-y-0.5 dark:bg-text-dark"
                          }`}
      ></span>
      <span
        className={`my-0.5 block h-[5px] w-10 bg-bg-dark transition-all 
                          duration-300 ease-out dark:bg-text-dark ${
                            isOpen ? "opacity-0" : "opacity-100"
                          }`}
      ></span>
      <span
        className={`block h-[5px] w-10 bg-bg-dark transition-all duration-400 
                          ease-out ${
                            isOpen
                              ? "-translate-y-[7px] -rotate-45 dark:bg-bg-dark"
                              : "translate-y-0.5 dark:bg-text-dark"
                          }`}
      ></span>
    </button>
  );
};

export { HamburgerMenu };
