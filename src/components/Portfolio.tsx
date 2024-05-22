import { Button } from "@/ui/Button";
import { forwardRef, useContext, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { projectNames } from "@/shared/const/const";
import clsx from "clsx";
import { ThemeProviderContext } from "@/providers/ThemeProvider";
import Link from "next/link";
import Image from "next/image";
import { IProject } from "@/models/IProject";
import GithubIcon from "@/shared/assets/img/Icons/Github.svg";
import { Skeleton } from "@/ui/Skeleton";

const Portfolio = forwardRef<HTMLElement>((_, ref) => {
  const [projects, setProjects] = useState<IProject[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [card, setCard] = useState<string>("all");

  useEffect(() => {
    fetch(`https://portfolioserver-1xcp1gph.b4a.run/${card}`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      });
  }, [card, setCard]);

  const t = useTranslations("Portfolio");
  const { theme } = useContext(ThemeProviderContext);

  const cardSkeleton = () =>
    new Array(2).fill(0).map((el, idx) => (
      <div className="flex flex-col items-center" key={idx}>
        <Skeleton className="group h-[370px] w-[540px] max-xl:h-[270px] max-xl:w-[415px] max-lg:h-[180px] max-lg:w-[350px] max-md:w-[290px]" />
        <div className="mb-4 mt-5 flex flex-col items-center gap-3">
          <Skeleton className="h-10 w-[330px] rounded-none max-lg:h-6 max-md:w-[220px]" />
          <Skeleton className="h-7 w-[250px] rounded-none max-lg:h-4 max-md:w-[180px]" />
        </div>
        <div className="flex justify-center gap-2.5">
          <Skeleton className="h-16 w-[170px] max-md:w-[140px]" />
          <Skeleton className="h-16 w-[170px] max-md:w-[140px]" />
        </div>
      </div>
    ));

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      ref={ref}
      className={clsx("py-20 max-xl:pb-[60px] max-xl:pt-8 max-lg:pb-10", {
        ["bgAnimate"]: theme === "light",
      })}
    >
      <div className="container mx-auto h-full">
        <h2 className="main-title text borderLine borderPosition bg-[length:100%_7px]">
          {t("title")}
        </h2>
        <div className="mt-[55px] max-xl:mt-10">
          <div className="flex flex-row gap-[70px] max-md:hidden">
            {projectNames.map((el, i) => (
              <Button
                key={i}
                variant="filterBtn"
                className="third-level-title text-2xl font-bold max-xl:text-xl"
                data-filter={el.dataFilter}
                onClick={() => setCard(el.dataFilter)}
                active={card === el.dataFilter ? true : false}
              >
                {el.name}
              </Button>
            ))}
          </div>
          <div className="mt-[35px] flex flex-wrap justify-between gap-y-[50px] max-xl:gap-10 max-lg:gap-5 max-md:gap-7">
            {isLoading && cardSkeleton()}
            {projects &&
              projects.map((el) => (
                <div
                  className="group w-[540px] max-xl:w-[415px] max-lg:w-[350px] max-md:w-[290px]"
                  key={el.title}
                >
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
                        className="h-[370px] rounded-md object-cover max-xl:h-[270px] max-lg:h-[180px]"
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
                          py-[15px]
                          text-[18px]
                          font-bold
                          leading-snug 
                          text-white-light 
                          opacity-0
                          transition-[0.3s] 
                          group-hover:opacity-100 
                          max-xl:px-[14px]
                          max-xl:text-[14px]
                          max-lg:text-xs
                          max-md:py-[7px]
                          max-md:text-[9px]
                        "
                      >
                        Go to website project
                      </span>
                    </div>
                  </Link>

                  <div className="mb-[15px] mt-4 flex flex-col items-center gap-y-1.5 max-lg:mb-[7px] max-lg:mt-1 max-lg:gap-0 max-md:mb-3">
                    <h3 className="text text-[30px] font-semibold leading-snug tracking-widest group-hover:text-[#FF543E] max-xl:text-2xl max-lg:text-[18px]">
                      {el.title}
                    </h3>
                    <p className="text third-level-title tracking-wide group-hover:text-[#FF543E] max-lg:text-[14px] max-md:flex max-md:w-[200px] max-md:justify-center">
                      {el.skills}
                    </p>
                  </div>
                  <div className="flex justify-center gap-2.5">
                    <Link href={el.frontEndRepo} target="_blank">
                      <Button variant="mainLight" className="btnRepo">
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
                      <Button variant="mainLight" className="btnRepo">
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
