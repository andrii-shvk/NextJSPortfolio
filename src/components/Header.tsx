import { Navbar } from "./Navbar";
import { ToggleTheme } from "@/shared/icons/ToggleTheme";
import { Button } from "@/ui/Button";
import { useTheme } from "@/shared/hooks/useTheme";
import { ToggleSwitcher } from "@/ui/ToggleSwitcher";
import { HamburgerMenu } from "@/ui/HamburgerMenu";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";

export interface NavLinks {
  name: string;
  fn: VoidFunction;
}

interface HeaderProps {
  navbarItems?: NavLinks[];
}

const Header = (props: HeaderProps) => {
  const { navbarItems } = props;
  const { toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const htmlEL = document.documentElement as HTMLElement;
  useEffect(() => {
    isOpen
      ? htmlEL.classList.add("overflow-hidden")
      : htmlEL.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <header
      className="flex justify-between pb-[90px] pt-[68px] 
                max-xl:pb-[68px] max-lg:py-8"
    >
      <Navbar navbarItems={navbarItems} />
      <div className="flex gap-6 max-lg:mr-auto">
        <Button variant="reset" onClick={toggleTheme}>
          <ToggleTheme
            className="text-icons-light transition-opacity delay-75 
                      hover:opacity-70 dark:text-icons-dark"
          />
        </Button>
        <ToggleSwitcher />
      </div>
      <div className="z-10 ml-auto hidden max-lg:flex">
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navbarItems={navbarItems}
      />
    </header>
  );
};

export { Header };
