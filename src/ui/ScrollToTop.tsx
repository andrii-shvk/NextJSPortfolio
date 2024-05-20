import { BackToTop } from "@/shared/icons/BackToTop";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Button } from "./Button";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      let scrollY: number = window.scrollY;
      scrollY > 350 ? setActive(true) : setActive(false);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Button
      className={clsx(
        "fixed right-[50px] z-[100] cursor-pointer rounded-[50%] bg-icons-dark px-[12px] py-[10px] transition-all delay-300",
        {
          "bottom-[50px]": active,
          "-bottom-[50px]": !active,
        },
      )}
      onClick={scrollToTop}
      variant="reset"
    >
      <BackToTop />
    </Button>
  );
};

export { ScrollToTop };
