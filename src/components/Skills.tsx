import { skills } from "@/shared/const/const";
import { IconsList } from "@/shared/icons/Stack/IconsList";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Skills = () => {
  const t = useTranslations('MainSection');

  return (
    <section>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text second-level-title mb-[30px]">{t('skills')} :</h1>
          <ul className="flex flex-col gap-[10px] list-custom ml-6">
            {skills.map((el, idx) => (
                <li className="text third-level-title leading-tight pl-[5px]" key={idx}>{el}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="text second-level-title">{t('contacts')} :</h1>
            <IconsList />
          <Link className="link linkHover" href="mailto:supamercron@gmail.com">supamercron@gmail.com</Link>
        </div>
      </div>
    </section>
  );
};

export { Skills };
