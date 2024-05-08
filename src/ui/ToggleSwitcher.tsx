import { useLocale } from "next-intl";
import { Button } from "./Button";
import { Locale } from "@/shared/types/locale";
import { useToggleSwitcher } from "@/shared/hooks/useToggleSwitcher";

const ToggleSwitcher = () => {
  const { toggleLocale } = useToggleSwitcher();
  const locale = useLocale() as Locale;

  return (
    <Button variant="reset" onClick={toggleLocale}>
      {locale === "en" ? "EN" : "RU"}
    </Button>
  );
};

export { ToggleSwitcher };
