import { skills } from "@/shared/const/const";
import { IconsList } from "@/shared/icons/Stack/IconsList";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { forwardRef } from "react";

const Skills = forwardRef<HTMLElement>((_, ref) => {
  const t = useTranslations("MainSection");

  return (
    <section
      ref={ref}
      className="pb-16 pt-24 max-xl:pb-12 max-lg:pt-6 max-md:pt-2.5"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="flex justify-between max-md:flex-col max-md:gap-7">
        <div className="flex flex-col">
          <h1 className="text second-level-title mb-[30px] max-xl:mb-5">
            {t("skills")} :
          </h1>
          <ul className="ml-6 flex flex-col gap-[10px] max-md:ml-0 md:list-custom">
            {skills.map((el, idx) => (
              <li
                className="text third-level-title pl-[5px] leading-tight max-md:pl-0"
                key={idx}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-7 max-xl:gap-5">
          <h1 className="text second-level-title">{t("contacts")} :</h1>
          <IconsList />
          <Link className="link linkHover" href="mailto:supamercron@gmail.com">
            supamercron@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
export { Skills };
