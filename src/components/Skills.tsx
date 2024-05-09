import { IconsList } from "@/shared/icons/Stack/IconsList";
import { Telegram } from "@/shared/icons/Stack/Telegram";
import { skills } from "@/utils/skills";
import Link from "next/link";

const Skills = () => {
  return (
    <section>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text second-level-title mb-[30px]">My skills :</h1>
          <ul className="flex flex-col gap-[10px] list-custom ml-6">
            {skills.map(el => (
                <li className="text third-level-title leading-tight pl-[5px]" key={el.skill}>{el.skill}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="text second-level-title">Contacts :</h1>
            <IconsList />
          <Link className="link linkHover" href="mailto:supamercron@gmail.com">supamercron@gmail.com</Link>
        </div>
      </div>
    </section>
  );
};

export { Skills };
