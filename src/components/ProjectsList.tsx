import Link from "next/link";
import Image from "next/image";
import { Button } from "@/ui/Button";
import { Github } from "@/shared/icons/Stack";
import { projects } from "../utils/projects";

interface ProjectListProps {
  card?: string;
}

const ProjectsList = ({ card }: ProjectListProps) => {
  const filteredCard = projects.filter((el) => card === el.mixItUp);

  console.log(filteredCard);

  const filteredProjects = filteredCard.map((el) => (
    <div className="group w-[540px]" id={el.mixItUp} key={el.title}>
      <Link href={el.linkTo} target="_blank">
        <div
          className="
          relative 
          overflow-hidden 
          before:absolute
          before:bottom-0 
          before:left-0
          before:right-0
          before:top-0
          before:z-[2]
          before:translate-y-full
          before:rounded-md
          before:bg-[#FFDD55BF]
          before:transition-all
          before:duration-300
          before:[content:'']
          group-hover:before:translate-y-0
        "
        >
          <Image
            src={el.img}
            alt={el.title}
            className="h-[370px] rounded-md object-cover"
          />
          <span
            className="
            text-white-light
            absolute 
            left-1/2 
            top-1/2 
            z-20  
            flex 
            -translate-x-1/2 
            -translate-y-1/2 
            items-center 
            rounded-[80px] 
            bg-[#EF6857ff] 
            px-5 
            py-[14px] 
            text-[18px] 
            font-bold 
            leading-snug 
            opacity-0 
            transition-[0.3s] 
            group-hover:opacity-100"
          >
            Go to website project
          </span>
        </div>
      </Link>

      <div className="mb-[15px] mt-4 flex flex-col items-center gap-y-1.5">
        <h3 className="text text-[30px] font-semibold leading-snug group-hover:text-[#FF543E]">
          {el.title}
        </h3>
        <p className="text third-level-title group-hover:text-[#FF543E]">
          {el.skills}
        </p>
      </div>
      <div className="flex justify-center gap-2.5">
        <Link href={el.frontEndRepo}>
          <Button variant="mainLight" className="btnRepo text-[16px]">
            Front End Repo <Github width={24} height={24} />
          </Button>
        </Link>
        <Link href={el.backEndRepo}>
          <Button variant="mainLight" className="btnRepo text-[16px]">
            Back End Repo <Github width={24} height={24} />
          </Button>
        </Link>
      </div>
    </div>
  ));

  const project = projects.map((el) => (
    <div className="group w-[540px]" id={el.mixItUp} key={el.title}>
      <Link href={el.linkTo} target="_blank">
        <div
          className="
          relative 
          overflow-hidden 
          before:absolute
          before:bottom-0 
          before:left-0
          before:right-0
          before:top-0
          before:z-[2]
          before:translate-y-full
          before:rounded-md
          before:bg-[#FFDD55BF]
          before:transition-all
          before:duration-300
          before:[content:'']
          group-hover:before:translate-y-0
        "
        >
          <Image
            src={el.img}
            alt={el.title}
            className="h-[370px] rounded-md object-cover"
          />
          <span
            className="
            text-white-light
            absolute 
            left-1/2 
            top-1/2 
            z-20  
            flex 
            -translate-x-1/2 
            -translate-y-1/2 
            items-center 
            rounded-[80px] 
            bg-[#EF6857ff] 
            px-5 
            py-[14px] 
            text-[18px] 
            font-bold 
            leading-snug 
            opacity-0 
            transition-[0.3s] 
            group-hover:opacity-100"
          >
            Go to website project
          </span>
        </div>
      </Link>

      <div className="mb-[15px] mt-4 flex flex-col items-center gap-y-1.5">
        <h3 className="text text-[30px] font-semibold leading-snug group-hover:text-[#FF543E]">
          {el.title}
        </h3>
        <p className="text third-level-title group-hover:text-[#FF543E]">
          {el.skills}
        </p>
      </div>
      <div className="flex justify-center gap-2.5">
        <Link href={el.frontEndRepo}>
          <Button variant="mainLight" className="btnRepo text-[16px]">
            Front End Repo <Github width={24} height={24} />
          </Button>
        </Link>
        <Link href={el.backEndRepo}>
          <Button variant="mainLight" className="btnRepo text-[16px]">
            Back End Repo <Github width={24} height={24} />
          </Button>
        </Link>
      </div>
    </div>
  ));

  return <>{card === "all" ? project : filteredProjects}</>;
};

export { ProjectsList };
