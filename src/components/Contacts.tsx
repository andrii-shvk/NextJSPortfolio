import { IconsList } from "@/shared/icons/Stack/IconsList";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Quotes from "@/shared/assets/img/Footer/quotes.png";
import { FormEvent, forwardRef, useContext, useState } from "react";
import clsx from "clsx";
import { ThemeProviderContext } from "@/providers/ThemeProvider";
import Tick from "@/shared/assets/img/Footer/tick.png";
import { ContactsForm } from "./ContactsForm";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

const Contacts = forwardRef<HTMLElement>((_, ref) => {
  const t = useTranslations("Contacts");
  const isMediumScreen = useMediaQuery(768);

  // active span
  const [inputActive, setInputActive] = useState<boolean>(false);
  const [textActive, setTextActive] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  // reset active span
  const resetClassForm = (e: FormEvent<HTMLElement>) => {
    const inp = document.querySelector("#firstInput") as HTMLInputElement;
    const text = document.querySelector("#textArea") as HTMLTextAreaElement;

    if (
      !(e.target as HTMLElement).closest("#firstInput") &&
      inp.value.length < 1
    ) {
      setInputActive(false);
    }
    if (
      !(e.target as HTMLElement).closest("#textArea") &&
      text.value.length < 1
    ) {
      setTextActive(false);
    }
  };

  const { theme } = useContext(ThemeProviderContext);

  return (
    <section
      ref={ref}
      className={clsx("py-[90px] max-xl:pb-[70px] max-xl:pt-10 max-lg:pb-10", {
        ["bgAnimate"]: theme === "light",
      })}
      onClick={(e) => resetClassForm(e)}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container mx-auto flex h-full flex-col items-center">
        <div className="mb-[70px] max-xl:mb-10 max-lg:mb-5">
          <h2 className="main-title borderLine borderPosition">{t("title")}</h2>
        </div>

        <div className="flex gap-[30px] max-md:w-[290px] max-md:flex-col">
          <div
            className="flex flex-col gap-8 max-md:gap-6"
            data-aos={isMediumScreen ? "fade-up" : "fade-right"}
            data-aos-duration="1500"
          >
            <p
              className="text w-[540px] text-[18px] max-xl:w-[390px] max-xl:text-base 
                        max-lg:w-[270px] max-lg:text-sm max-md:w-[290px]"
            >
              {t("description")}
            </p>

            <ul className="ulContacts">
              <li className="liContacts">
                <span className="spanContacts">Email</span>
                <Link
                  href="mailto:andrii.shevk@gmail.com"
                  className="link linkHover"
                >
                  andrii.shevk@gmail.com
                </Link>
              </li>
              <li className="liContacts">
                <span className="spanContacts">{t("Phone")}</span>
                <Link href="tel:+19295611188" className="link linkHover">
                  +1 (929) 561-11-88
                </Link>
              </li>
              <li className="liContacts">
                <span className="spanContacts">{t("Location")}</span>
                <span className="font-bold text-link-primary">
                  {t("Virginia")}
                </span>
              </li>
            </ul>

            <IconsList />
          </div>

          <div className="text relative min-w-[540px] max-xl:min-w-[450px] max-md:min-w-[290px]">
            <ContactsForm
              isSubmit={isSubmit}
              setIsSubmit={setIsSubmit}
              inputActive={inputActive}
              setInputActive={setInputActive}
              textActive={textActive}
              setTextActive={setTextActive}
            />
            {isSubmit && (
              <div
                className="mt-10 flex flex-col items-center"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <span
                  className="text-[50px] text-[#67AF67]
                  max-lg:text-[40px] max-md:text-[30px]
                "
                >
                  Form Submitted!
                </span>
                <Image
                  loading="lazy"
                  src={Tick}
                  alt="Tick"
                  height={64}
                  width={64}
                />
              </div>
            )}

            <div className="quotesContacts">
              <Image loading="lazy" src={Quotes} alt="quotes" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contacts.displayName = "Contacts";
export { Contacts };
