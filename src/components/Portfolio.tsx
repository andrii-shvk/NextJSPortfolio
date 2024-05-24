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
        <Skeleton
          className="
            group 
            h-[370px] 
            w-[540px] 
            max-xl:h-[270px] 
            max-xl:w-[415px] 
            max-lg:h-[180px] 
            max-lg:w-[350px] 
            max-md:w-[290px]
        "
        />
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
      className={clsx(
        "py-[85px] max-xl:pb-[60px] max-xl:pt-[88px] max-lg:pb-10 max-lg:pt-8",
        {
          ["bgAnimate"]: theme === "light",
        },
      )}
    >
      <div className="container mx-auto h-full">
        <h2 className="main-title borderLine borderPosition">{t("title")}</h2>
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
          <div className="portfolioCardsBlock">
            {isLoading && cardSkeleton()}
            {projects &&
              projects.map((el) => (
                <div
                  className="group w-[540px] 
                    max-xl:w-[415px] max-lg:w-[350px] max-md:w-[290px]"
                  key={el.title}
                >
                  <Link href={el.linkTo} target="_blank">
                    <div className="cardHoverBg">
                      <Image
                        src={el.img}
                        alt={el.title}
                        width={540}
                        height={370}
                        className="h-[370px] rounded-md object-cover 
                                  max-xl:h-[270px] max-lg:h-[180px]" 
                        loading="lazy"
                      />
                      <span className="cardHoverSpan">
                        Go to website project
                      </span>
                    </div>
                  </Link>

                  <div className="cardDescription">
                    <h3 className="cardTitle">{el.title}</h3>
                    <p className="cardSubTitle">{el.skills}</p>
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
                          loading="lazy"
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
                          loading="lazy"
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

Portfolio.displayName = 'Portfolio';
export { Portfolio };
