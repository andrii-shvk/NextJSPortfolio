import { IconsList } from "@/shared/icons/Stack/IconsList";
import clsx from "clsx";
import Link from "next/link";
import { NavLinks } from "./Header";
import { Button } from "@/ui/Button";
import { useTranslations } from "next-intl";

interface MobileMenuProps {
  isOpen: boolean;
  navbarItems?: NavLinks[];
}

const MobileMenu = (props: MobileMenuProps) => {
  const { isOpen, navbarItems } = props;
  const t = useTranslations("HeaderNav");
  return (
    <div
      className={clsx(
        "bg-bgMenu-primary fixed bottom-0 right-0 top-0 z-[5] flex w-full translate-x-full justify-end duration-500",
        {
          "translate-x-[0%]": isOpen,
        },
      )}
    >
      <div className="flex h-full w-[320px] flex-col justify-between bg-bg-light pb-10 pl-[15px] pt-[30px] max-md:w-full">
        <ul className="flex flex-col items-start gap-7">
          {navbarItems?.map((item) => (
            <li key={item.name}>
              <Button
                key={item.name}
                onClick={item.fn}
                className="text-xl font-bold text-text-light
            transition-colors delay-75 hover:opacity-80"
                variant="reset"
              >
                {t(`${item.name}`)}
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-5">
          <IconsList isMenuOpen={isOpen} />
          <Link className="link linkHover text-xl" href="mailto:supamercron@gmail.com">
            supamercron@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export { MobileMenu };
