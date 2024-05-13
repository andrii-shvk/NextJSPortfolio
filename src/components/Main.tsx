import { Button } from "@/ui/Button";
import MainPhoto from "@/shared/assets/img/Main/portfolio-photo.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Main = () => {
  const t = useTranslations("MainSection");

  return (
    <section className="px-0 pb-[90px]">
      <div className="flex justify-between">
        <div className="flex w-[540px] flex-col justify-center gap-[30px]">
          <div className="text text-text-lightBrown text-7xl font-bold dark:text-text-dark">
            <h1 className="borderLine bg-[length:100%_20px]">
              {t('name')}
            </h1>
            <br />
            <h1 className="borderLine bg-[length:100%_20px]">
              {t('surname')}
            </h1>
          </div>
          <p className="text third-level-title leading-relaxed">
            {t("description")}
            <span className="font-semibold"> {t("descriptionSpan")}</span>
          </p>
          <div className="flex gap-6">
            <Button>{t("skills")}</Button>
            <Button variant="mainLight">{t("contacts")}</Button>
          </div>
        </div>
        <Image
          className="bx h-[410px] w-[430px] rounded-[25%] object-cover"
          src={MainPhoto}
          priority
          alt="MainPhoto"
        />
      </div>
    </section>
  );
};

export { Main };
