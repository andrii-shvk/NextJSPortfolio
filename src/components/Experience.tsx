import { experienceList } from "@/shared/const/const";
import { Locale } from "@/shared/types/locale";
import { useLocale, useTranslations } from "next-intl";
import { forwardRef } from "react";

const Experience = forwardRef<HTMLElement>((_, ref) => {
  const locale = useLocale() as Locale;
  const t = useTranslations("MyExperience");

  return (
    <section
      ref={ref}
      className="pb-[70px] pt-[87px] max-lg:py-10"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="mx-auto flex flex-col items-center">
        <h2
          className="main-title borderLine borderPosition 
                    mb-[70px] max-xl:mb-[50px] max-lg:mb-10"
        >
          {t("title")}
        </h2>
        <div
          className="[&>*:nth-child(even)]:rightTimeline w-[850px] 
                    max-lg:w-[768px] 
                    max-md:w-[290px] 
                    max-lg:[&>*:nth-child(even)]:ml-[240px] 
                    max-md:[&>*:nth-child(even)]:ml-auto"
        >
          {experienceList.map((elem) => (
            <div
              className="timeline leftTimeLine flex flex-col gap-2 
                        max-lg:mx-0 max-lg:ml-[240px] max-lg:mr-auto
                         max-md:ml-auto max-md:w-[246px] max-md:pr-0"
              key={elem[locale].title}
            >
              <h3 className="titleExpList">{elem[locale].title}</h3>
              <p className="text fourth-level-title">
                {elem[locale].description}
              </p>
              <p className="text fourth-level-title font-bold">
                {elem[locale].duration} <br />
                {elem[locale].data}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export { Experience };
