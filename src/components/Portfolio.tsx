import { Button } from "@/ui/Button";
import {
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTranslations } from "next-intl";
import { projectNames } from "@/shared/const/const";
import clsx from "clsx";
import { ThemeProviderContext } from "@/providers/ThemeProvider";
import Link from "next/link";
import Image from "next/image";
import { IProject } from "@/models/IProject";
import GithubIcon from "@/shared/assets/img/Icons/Github.svg";

const Portfolio = forwardRef<HTMLElement>((_, ref) => {
  
  const [projects, setProjects] = useState<IProject[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [card, setCard] = useState<string>("all");

  useEffect(() => {
    fetch(`http://localhost:5000/${card}`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      });
  }, [card, setCard]);

  const t = useTranslations("Portfolio");
  const { theme } = useContext(ThemeProviderContext);

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      ref={ref}
      className={clsx("py-20", {
        ["bgAnimate"]: theme === "light",
      })}
    >
      <div className=" container mx-auto h-full px-5">
        <h2 className="main-title text borderLine borderPosition bg-[length:100%_7px]">
          {t("title")}
        </h2>
        <div className="mt-10">
          <div className="flex flex-row gap-[70px]">
            {projectNames.map((el, i) => (
              <Button
                key={i}
                variant="filterBtn"
                className="third-level-title text-[24px] font-bold"
                data-filter={el.dataFilter}
                onClick={() => setCard(el.dataFilter)}
                active={card === el.dataFilter ? true : false}
              >
                {el.name}
              </Button>
            ))}
          </div>
          <div className="mt-[35px] flex flex-wrap justify-between gap-y-[50px]">
            {isLoading && <h1 className="text text-3xl">Loading...</h1>}
            {projects &&
              projects.map((el) => (
                <div className="group w-[540px]" key={el.title}>
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
                        width={540}
                        height={370}
                        className="h-[370px] rounded-md object-cover"
                        priority
                      />
                      <span
                        className="
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
                        text-white-light 
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
                    <Link href={el.frontEndRepo} target="_blank">
                      <Button
                        variant="mainLight"
                        className="btnRepo text-[16px]"
                      >
                        Front End Repo
                        <Image
                          src={GithubIcon}
                          alt="GitHubIcon"
                          width={24}
                          height={24}
                        />
                      </Button>
                    </Link>
                    <Link href={el.backEndRepo} target="_blank">
                      <Button
                        variant="mainLight"
                        className="btnRepo text-[16px]"
                      >
                        Back End Repo
                        <Image
                          src={GithubIcon}
                          alt="GitHubIcon"
                          width={24}
                          height={24}
                        />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export { Portfolio };
