import { useContactsForm } from "@/shared/hooks/useContactsForm";
import { Button } from "@/ui/Button";
import axios from "axios";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

interface ContactsFormProps {
  isSubmit: boolean;
  setIsSubmit: (isSubmit: boolean) => void;
  inputActive: boolean;
  setInputActive: (inputActive: boolean) => void;
  textActive: boolean;
  setTextActive: (textActive: boolean) => void;
}

const ContactsForm = (props: ContactsFormProps) => {
  const {
    isSubmit,
    setIsSubmit,
    inputActive,
    setInputActive,
    textActive,
    setTextActive,
  } = props;

  const t = useTranslations("Contacts");
  const { email, setEmail, message, setMessage, onChange, resetForm } =
    useContactsForm();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post("https://shevchuk-dev.vercel.app/api/email", {
        email,
        message,
      });
      resetForm();
      setIsSubmit(true);
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className={clsx("formContacts group", {
        hidden: isSubmit,
      })}
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
          className="input h-10 bg-transparent text-[18px] 
                      font-bold max-md:text-base"
          onClick={() => setInputActive(true)}
          onKeyDown={() => setInputActive(true)}
          onChange={(e) => onChange(e, setEmail)}
        />
      </label>
      <label className="relative mb-[30px] flex flex-col">
        <span
          className={clsx(
            "absolute text-[22px] leading-snug text-[#9D9D9D] max-lg:text-[18px] max-md:text-base",
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
          className="input resize-none bg-transparent text-[18px] 
                      font-bold outline-none max-md:text-base"
          onKeyDown={() => setTextActive(true)}
          onClick={() => setTextActive(true)}
          onChange={(e) => onChange(e, setMessage)}
        />
      </label>
      <div>
        <Button
          variant="main"
          className={clsx(
            "relative px-[50px] text-xl max-lg:text-[18px] max-md:w-full",
            {
              "bg-accent-darkYellowActive opacity-50 hover:bg-accent-darkYellowActive hover:text-text-light":
                isLoading,
            },
          )}
        >
          {t("submit")}
        </Button>
      </div>
    </form>
  );
};

export { ContactsForm };
