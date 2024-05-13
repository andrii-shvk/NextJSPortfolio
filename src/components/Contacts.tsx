import { IconsList } from "@/shared/icons/Stack/IconsList";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Quotes from "@/shared/assets/img/Footer/quotes.png";
import { Button } from "@/ui/Button";

const Contacts = () => {
  const t = useTranslations("Contacts");

  return (
    <section className="flex flex-col items-center pb-[90px] pt-[70px]">
      <h2 className="main-title text borderLine borderPosition mb-[70px] bg-[length:100%_7px]">
        {t("title")}
      </h2>

      <div className="flex justify-between">
        <div className="flex flex-col gap-8">
          <p className="text w-[540px] text-[18px]">{t("description")}</p>

          <ul className="flex flex-col gap-[22px]">
            <li className="text third-level-title flex items-center">
              <span className="min-w-[188px] font-bold leading-relaxed">
                Email
              </span>
              <Link href="mailto:supamercron@gmail.com" className="link">
                supamercron@gmail.com
              </Link>
            </li>
            <li className="text third-level-title flex items-center">
              <span className="min-w-[188px] font-bold leading-relaxed">
                {t("Phone")}
              </span>
              <Link href="tel:+19295611188" className="link">
                +1 (929) 561-11-88
              </Link>
            </li>
            <li className="text third-level-title flex items-center">
              <span className="min-w-[188px] font-bold leading-relaxed">
                {t("Location")}
              </span>
              <span className="font-bold text-link-primary">
                {t("Virginia")}
              </span>
            </li>
          </ul>

          <IconsList />
        </div>

        <div className="text relative min-w-[540px]">
          <form className="h-full rounded-[30px] bg-[#fff] p-[50px]">
            <div className="relative mb-[42px] flex flex-col">
              <span className="absolute text-[22px] text-[#9D9D9D]">Email</span>
              <input
                required
                type="email"
                name="email"
                className="h-10 border-b-2 border-b-[#E5E5E5]"
              />
            </div>
            <div className="relative mb-[42px] flex flex-col">
              <span className="absolute text-[22px] text-[#9D9D9D]">
                Введите текст
              </span>
              <textarea
                cols={30}
                rows={8}
                required
                name="message"
                className="border-b-2 border-b-[#E5E5E5]"
              />
            </div>
            <div>
              <Button variant="main" className="relative px-[50px]">Submit</Button>
            </div>
          </form>

          <div className="absolute -right-[90px] -top-[90px] flex">
            <Image src={Quotes} alt="quotes" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contacts };
