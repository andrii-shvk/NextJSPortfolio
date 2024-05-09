import { useLocale } from "next-intl";
import { Button } from "./Button";
import { Locale } from "@/shared/types/locale";
import { useToggleSwitcher } from "@/shared/hooks/useToggleSwitcher";

const ToggleSwitcher = () => {
  const { toggleLocale } = useToggleSwitcher();
  const locale = useLocale() as Locale;

  return (
    <Button
      className="transition-opacity delay-75 hover:opacity-70"
      variant="reset"
      onClick={toggleLocale}
    >
      {locale === "en" ? "EN" : "RU"}
    </Button>
  );
};

export { ToggleSwitcher };
