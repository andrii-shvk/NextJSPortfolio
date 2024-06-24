import { ChangeEvent, useState } from "react";

const useContactsForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    callback: (arg: string) => void,
  ) => {
    callback(e.target.value);
  };

  const resetForm = () => {
    setEmail("");
    setMessage("");
  };

  return {
    email,
    setEmail,
    message,
    setMessage,
    onChange,
    resetForm,
  };
};

export { useContactsForm };
