"use client";

import { Contacts } from "@/components/Contacts";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Portfolio } from "@/components/Portfolio";
import { Skills } from "@/components/Skills";
import { useNavbarItems } from "@/shared/hooks/useNavbarItems";
import { ScrollToTop } from "@/ui/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  const {
    navbarItems,
    navBtnItems,
    refSkills,
    refPortfolio,
    refExperience,
    refContacts,
  } = useNavbarItems();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="container mx-auto h-full">
        <Header navbarItems={navbarItems} />
        <Main navBtnItems={navBtnItems} />
        <Skills ref={refSkills} />
      </div>
      <Portfolio ref={refPortfolio} />
      <div className="container mx-auto h-full">
        <Experience ref={refExperience} />
      </div>
      <Contacts ref={refContacts} />
      <Footer />
      <ScrollToTop />
    </>
  );
}
