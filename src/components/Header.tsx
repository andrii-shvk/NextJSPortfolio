import { useTranslations } from "next-intl";
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
  const t = useTranslations("HeaderNav");

  const {toggleTheme} = useTheme();

  return (
    <header className="flex justify-between">
      <Navbar navbarItems={navbarItems} />
      <div className="flex gap-6">
        <Button variant="reset"
        onClick={toggleTheme}>
          <ToggleTheme className="text-icons-light dark:text-icons-dark" />
        </Button>
        <ToggleSwitcher />
      </div>
    </header>
  );
};

export { Header };
