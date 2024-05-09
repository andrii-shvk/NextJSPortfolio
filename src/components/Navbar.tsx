import { useNavbarItems } from "@/shared/hooks/useNavbarItems";
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
      <ul className="flex gap-14">
        {navbarItems?.map((item) => (
          <li key={item.name}>
            <Button
              key={item.name}
              className="text third-level-title transition-colors
            delay-75 hover:opacity-80 font-semibold"
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
