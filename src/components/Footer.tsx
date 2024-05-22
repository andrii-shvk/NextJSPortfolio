import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-footer-light pb-[50px] pt-10 dark:bg-footer-dark">
      <div className="container mx-auto flex flex-col gap-2.5">
        <span className="text-text-dark">&copy; 2024 - {t("name")}</span>
        <p className="text-[#B0B0B0] max-xl:text-sm max-md:w-[195px]">
          {t("description")}
        </p>
      </div>
    </footer>
  );
};

export { Footer };
