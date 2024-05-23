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
    <section className="px-0 pb-[90px] max-xl:pb-[60px]">
      <div className="flex justify-between max-md:flex-col max-md:items-start">
        <div
          className="headerContent"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="headerNameBlock">
            <h1 className="borderLine headerName">{t("name")}</h1>
            <br />
            <h1 className="borderLine headerName">{t("surname")}</h1>
          </div>
          <p className="text text-xl leading-relaxed max-lg:text-base max-md:hidden">
            {t("description")}
            <span className="font-semibold"> {t("descriptionSpan")}</span>
          </p>
          <div className="flex gap-6 max-xl:gap-[20px] max-lg:hidden">
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
          className="headerImg"
          src={MainPhoto}
          priority
          alt="MainPhoto"
          data-aos="fade-up"
          data-aos-duration="1500"
        />
        <p
          className="text mt-2.5 hidden text-base leading-relaxed 
                    max-md:flex max-md:flex-col"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          {t("description")}
          <br />
          <span className="font-semibold"> {t("descriptionSpan")}</span>
        </p>
      </div>
    </section>
  );
};

export { Main };
