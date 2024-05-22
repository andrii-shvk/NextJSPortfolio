import { Button } from "@/ui/Button";
import { useTranslations } from "next-intl";
import { NavLinks } from "./Header";

interface NavbarProps {
  navbarItems?: NavLinks[];
}

const Navbar = (props: NavbarProps) => {
  const { navbarItems } = props;
  const t = useTranslations("HeaderNav");

  return (
    <nav>
      <ul className="flex gap-24 max-xl:gap-12 max-lg:hidden">
        {navbarItems?.map((item) => (
          <li key={item.name}>
            <Button
              key={item.name}
              onClick={item.fn}
              className="text third-level-title font-semibold
            transition-colors delay-75 hover:opacity-80"
              variant="reset"
            >
              {t(`${item.name}`)}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
