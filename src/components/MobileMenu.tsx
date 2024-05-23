import { IconsList } from "@/shared/icons/Stack/IconsList";
import clsx from "clsx";
import Link from "next/link";
import { NavLinks } from "./Header";
import { Button } from "@/ui/Button";
import { useTranslations } from "next-intl";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navbarItems?: NavLinks[];
}

const MobileMenu = (props: MobileMenuProps) => {
  const { isOpen, navbarItems, setIsOpen } = props;
  const t = useTranslations("HeaderNav");
  return (
    <aside
      className={clsx(
        "bg-bgMenu-primary fixed bottom-0 right-0 top-0 z-[5] flex w-full justify-end duration-500",
        {
          "translate-x-0": isOpen,
          "translate-x-full": !isOpen,
        },
      )}
    >
      <nav className="mobileMenuNav">
        <ul className="flex flex-col items-start gap-7">
          {navbarItems?.map((item) => (
            <li key={item.name} onClick={() => setIsOpen(!isOpen)}>
              <Button
                key={item.name}
                onClick={item.fn}
                className="text text-xl font-bold 
                          transition-colors delay-75 hover:opacity-80"
                variant="reset"
              >
                {t(`${item.name}`)}
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-5">
          <IconsList />
          <Link
            className="link linkHover text-xl"
            href="mailto:supamercron@gmail.com"
          >
            supamercron@gmail.com
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export { MobileMenu };
