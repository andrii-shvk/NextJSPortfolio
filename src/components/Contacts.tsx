import { IconsList } from "@/shared/icons/Stack/IconsList";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Quotes from "@/shared/assets/img/Footer/quotes.png";
import { Button } from "@/ui/Button";
import { useContactsForm } from "@/shared/hooks/useContactsForm";
import { FormEvent, forwardRef, useContext, useState } from "react";
import axios from "axios";
import clsx from "clsx";
import { ThemeProviderContext } from "@/providers/ThemeProvider";
import { useMediaQuery } from "react-responsive";

const Contacts = forwardRef<HTMLElement>((_, ref) => {
  const t = useTranslations("Contacts");
  const { email, setEmail, message, setMessage, onChange, resetForm } =
    useContactsForm();
  const isMediumScreen = useMediaQuery({ query: "(max-width: 768px)" });

  // active span
  const [inputActive, setInputActive] = useState<boolean>(false);
  const [textActive, setTextActive] = useState<boolean>(false);

  // reset active span
  const resetClassForm = (e: any) => {
    const inp = document.querySelector("#firstInput") as HTMLInputElement;
    const text = document.querySelector("#textArea") as HTMLTextAreaElement;
    if (!e.target.closest("#firstInput") && inp.value.length < 1) {
      setInputActive(false);
    }
    if (!e.target.closest("#textArea") && text.value.length < 1) {
      setTextActive(false);
    }
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/email", {
        email,
        message,
      });
      resetForm();
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
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
          <h2 className="main-title text borderLine borderPosition bg-[length:100%_7px]">
            {t("title")}
          </h2>
        </div>

        <div className="flex gap-[30px] max-md:w-[290px] max-md:flex-col">
          <div
            className="flex flex-col gap-8 max-md:gap-6"
            data-aos={isMediumScreen ? "fade-up" : "fade-right"}
            data-aos-duration="1500"
          >
            <p className="text w-[540px] text-[18px] max-xl:w-[390px] max-xl:text-base max-lg:w-[270px] max-lg:text-sm max-md:w-[290px]">
              {t("description")}
            </p>

            <ul className="flex w-[500px] flex-col gap-[22px] max-xl:w-[375px] max-lg:w-[270px] max-lg:gap-2.5">
              <li className="text third-level-title flex items-center max-lg:flex-col max-lg:items-start">
                <span className="min-w-[188px] font-bold leading-relaxed max-xl:min-w-[120px]">
                  Email
                </span>
                <Link
                  href="mailto:supamercron@gmail.com"
                  className="link linkHover"
                >
                  supamercron@gmail.com
                </Link>
              </li>
              <li className="text third-level-title flex items-center max-lg:flex-col max-lg:items-start">
                <span className="min-w-[188px] font-bold leading-relaxed max-xl:min-w-[120px]">
                  {t("Phone")}
                </span>
                <Link href="tel:+19295611188" className="link linkHover">
                  +1 (929) 561-11-88
                </Link>
              </li>
              <li className="text third-level-title flex items-center max-lg:flex-col max-lg:items-start">
                <span className="min-w-[188px] font-bold leading-relaxed max-xl:min-w-[120px]">
                  {t("Location")}
                </span>
                <span className="font-bold text-link-primary">
                  {t("Virginia")}
                </span>
              </li>
            </ul>

            <IconsList />
          </div>

          <div className="text relative min-w-[540px] max-xl:min-w-[450px] max-md:min-w-[290px]">
            <form
              className="group h-[420px] rounded-[30px] bg-[#fff] p-[50px] max-md:h-[375px] max-md:rounded-[20px] max-md:px-[15px] max-md:pb-[30px] max-md:pt-[45px]"
              onSubmit={submitForm}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <label className="relative mb-[42px] flex flex-col">
                <span
                  className={clsx(
                    "absolute text-[22px] text-[#9D9D9D] max-lg:text-[18px] max-md:text-base",
                    {
                      ["inputActive"]: inputActive,
                    },
                  )}
                >
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  id="firstInput"
                  value={email}
                  className="input h-10 bg-transparent text-[18px] font-bold max-md:text-base"
                  onClick={() => setInputActive(true)}
                  onKeyDown={() => setInputActive(true)}
                  onChange={(e) => onChange(e, setEmail)}
                />
              </label>
              <label className="relative mb-[30px] flex flex-col">
                <span
                  className={clsx(
                    "absolute text-[22px] leading-snug text-[#9D9D9D] max-lg:text-[18px]",
                    {
                      ["textAreaActive"]: textActive,
                    },
                  )}
                >
                  {t("message")}
                </span>
                <textarea
                  cols={30}
                  rows={6}
                  required
                  id="textArea"
                  name="message"
                  value={message}
                  className="input resize-none bg-transparent text-[18px] font-bold outline-none max-md:text-base"
                  onKeyDown={() => setTextActive(true)}
                  onClick={() => setTextActive(true)}
                  onChange={(e) => onChange(e, setMessage)}
                />
              </label>
              <div>
                <Button
                  variant="main"
                  className="relative px-[50px] text-xl max-lg:text-[18px] max-md:w-full"
                >
                  {t("submit")}
                </Button>
              </div>
            </form>

            <div className="absolute -right-[90px] -top-[90px] flex max-2xl:-right-0 max-2xl:left-[250px] max-2xl:overflow-hidden max-lg:hidden">
              <Image src={Quotes} alt="quotes" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export { Contacts };
