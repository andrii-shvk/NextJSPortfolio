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
          className="flex w-[540px] flex-col justify-center gap-[30px] max-xl:w-[420px] max-xl:gap-6 max-lg:w-[354px] max-lg:gap-4 max-md:w-[220px] max-md:pb-5"
          data-aos='fade-right'
          data-aos-duration='1500'
        >
          <div className="text text-7xl font-bold text-text-lightBrown max-xl:text-[58px] max-lg:text-[42px] max-md:ml-2 max-md:text-[32px] dark:text-text-dark">
            <h1 className="borderLine bg-[length:100%_20px]">{t("name")}</h1>
            <br />
            <h1 className="borderLine bg-[length:100%_20px]">{t("surname")}</h1>
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
          className="h-[410px] w-[430px] rounded-[25%] object-cover max-xl:h-[325px] max-xl:w-[376px] max-lg:h-[250px] max-lg:w-[290px]"
          src={MainPhoto}
          priority
          alt="MainPhoto"
          data-aos="fade-up"
          data-aos-duration="1500"
        />
        <p 
          className="text mt-2.5 hidden text-base leading-relaxed max-md:flex max-md:flex-col"
          data-aos='fade-up'
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
