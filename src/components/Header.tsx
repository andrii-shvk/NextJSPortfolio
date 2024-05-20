import { Navbar } from "./Navbar";
import { ToggleTheme } from "@/shared/icons/ToggleTheme";
import { Button } from "@/ui/Button";
import { useTheme } from "@/shared/hooks/useTheme";
import { ToggleSwitcher } from "@/ui/ToggleSwitcher";

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

  return (
    <header className="flex justify-between pb-[90px] pt-[68px]">
      <Navbar navbarItems={navbarItems} />
      <div className="flex gap-6">
        <Button variant="reset" onClick={toggleTheme}>
          <ToggleTheme className="text-icons-light transition-opacity delay-75 hover:opacity-70 dark:text-icons-dark" />
        </Button>
        <ToggleSwitcher />
      </div>
    </header>
  );
};

export { Header };
