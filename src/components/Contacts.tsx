import { IconsList } from "@/shared/icons/Stack/IconsList";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Quotes from "@/shared/assets/img/Footer/quotes.png";
import { Button } from "@/ui/Button";
import { useContactsForm } from "@/shared/hooks/useContactsForm";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import clsx from "clsx";

const Contacts = () => {
  const t = useTranslations("Contacts");
  const { email, setEmail, message, setMessage, onChange, resetForm } =
    useContactsForm();

  // active span
  const [inputActive, setInputActive] = useState(false);
  const [textActive, setTextActive] = useState(false);

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

  return (
    <section
      className="flex flex-col items-center pb-[90px] pt-[70px]"
      onClick={(e) => resetClassForm(e)}
    >
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
              <Link href="mailto:supamercron@gmail.com" className="link linkHover">
                supamercron@gmail.com
              </Link>
            </li>
            <li className="text third-level-title flex items-center">
              <span className="min-w-[188px] font-bold leading-relaxed">
                {t("Phone")}
              </span>
              <Link href="tel:+19295611188" className="link linkHover">
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
          <form
            className="group h-[420px] rounded-[30px] bg-[#fff] p-[50px]"
            onSubmit={submitForm}
          >
            <label className="relative mb-[42px] flex flex-col">
              <span
                className={clsx("absolute text-[22px] text-[#9D9D9D]", {
                  ["inputActive"]: inputActive,
                })}
              >
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                id="firstInput"
                value={email}
                className="input bg-transparent h-10 text-[18px] font-bold"
                onClick={() => setInputActive(true)}
                onKeyDown={() => setInputActive(true)}
                onChange={(e) => onChange(e, setEmail)}
              />
            </label>
            <label className="relative mb-[42px] flex flex-col">
              <span
                className={clsx(
                  "absolute text-[22px] leading-snug text-[#9D9D9D]",
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
                className="input bg-transparent resize-none text-[18px] font-bold outline-none"
                onKeyDown={() => setTextActive(true)}
                onClick={() => setTextActive(true)}
                onChange={(e) => onChange(e, setMessage)}
              />
            </label>
            <div>
              <Button variant="main" className="relative px-[50px]">
                {t("submit")}
              </Button>
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
