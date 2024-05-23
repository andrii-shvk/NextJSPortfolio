import { RefObject, useRef } from "react";

const useNavbarItems = () => {
  const refSkills = useRef<HTMLTableSectionElement>(null);
  const refPortfolio = useRef<HTMLTableSectionElement>(null);
  const refExperience = useRef<HTMLTableSectionElement>(null);
  const refContacts = useRef<HTMLTableSectionElement>(null);

  const handleClick = (ref: RefObject<HTMLTableSectionElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({behavior: "smooth"});
    }
  };

  const navbarItems = [
    {
      name: "MySkills",
      fn: () => handleClick(refSkills),
    },
    {
      name: "Portfolio",
      fn: () => handleClick(refPortfolio),
    },
    {
      name: "MyExperience",
      fn: () => handleClick(refExperience),
    },
    {
      name: "MyContacts",
      fn: () => handleClick(refContacts),
    },
  ];

  const navBtnItems = [
    {
      name: "projects",
      fn: () => handleClick(refPortfolio),
    },
    {
      name: "contacts",
      fn: () => handleClick(refContacts),
    },
  ];

  return {
    navbarItems,
    navBtnItems,
    refSkills,
    refPortfolio,
    refExperience,
    refContacts,
  };
};

export { useNavbarItems };
