import { Button } from "@/ui/Button";
import MainPhoto from "@/shared/assets/img/Main/portfolio-photo.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { NavLinks } from "./Header";

interface MainProps {
  navBtnItems?: NavLinks[];
}

const Main = (props: MainProps) => {
  const { navBtnItems } = props;
  const t = useTranslations("MainSection");

  return (
    <section className="px-0 pb-[90px]">
      <div className="flex justify-between">
        <div
          className="flex w-[540px] flex-col justify-center gap-[30px]"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="text text-7xl font-bold text-text-lightBrown dark:text-text-dark">
            <h1 className="borderLine bg-[length:100%_20px]">{t("name")}</h1>
            <br />
            <h1 className="borderLine bg-[length:100%_20px]">{t("surname")}</h1>
          </div>
          <p className="text third-level-title leading-relaxed">
            {t("description")}
            <span className="font-semibold"> {t("descriptionSpan")}</span>
          </p>
          <div className="flex gap-6">
            {navBtnItems &&
              navBtnItems.map((item) => (
                <Button
                  key={item.name}
                  onClick={item.fn}
                  variant={item.name === "contacts" ? "mainLight" : "main"}
                >
                  {t(item.name)}
                </Button>
              ))}
          </div>
        </div>
        <Image
          className="bx h-[410px] w-[430px] rounded-[25%] object-cover"
          src={MainPhoto}
          priority
          alt="MainPhoto"
          data-aos="fade-left"
          data-aos-duration="1500"
        />
      </div>
    </section>
  );
};

export { Main };
