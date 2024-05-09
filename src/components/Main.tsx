import { Button } from "@/ui/Button";
import MainPhoto from "@/shared/assets/img/Main/portfolio-photo.jpg";
import Image from "next/image";

const Main = () => {
  return (
    <section className="px-0 pb-[90px]">
      <div className="flex justify-between">
        <div className="flex w-[540px] flex-col justify-center gap-[30px]">
          <h1 className="text text-7xl font-semibold">Andrii Shevchuk</h1>
          <p className="text third-level-title leading-relaxed">
            Front End Developer with passion for learning and creating. Based in
            <span className="font-semibold"> Virginia Beach, VA, USA.</span>
          </p>
          <div className="flex gap-6">
            <Button>About my skills</Button>
            <Button variant="mainLight">Contacts</Button>
          </div>
        </div>
        <Image
          className="h-[410px] w-[430px] rounded-[25%] object-cover"
          src={MainPhoto}
          priority
          alt="MainPhoto"
        />
      </div>
    </section>
  );
};

export { Main };