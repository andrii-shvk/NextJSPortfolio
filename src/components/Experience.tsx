import { experienceList } from "@/shared/const/const";
import { Locale } from "@/shared/types/locale";
import { useLocale, useTranslations } from "next-intl";

const Experience = () => {
  
  const locale = useLocale() as Locale;
  const t = useTranslations("MyExperience");

  return (
    <section className="py-[70px]">
      <div className="mx-auto flex flex-col items-center">
        <h2 className="main-title text borderLine borderPosition mb-[70px] bg-[length:100%_7px]">
          {t("title")}
        </h2>
        <div className="[&>*:nth-child(even)]:rightTimeline w-[850px]">
          {experienceList.map((elem) => (
            <div className="timeline leftTimeLine flex flex-col gap-2" key={elem[locale].title}>
              <h3 className="text third-level-title borderLine font-bold leading-snug">
                {elem[locale].title}
              </h3>
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
};

export { Experience };
