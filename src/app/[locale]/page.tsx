"use client";

import { Contacts } from "@/components/Contacts";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Portfolio } from "@/components/Portfolio";
import { Skills } from "@/components/Skills";
import { useNavbarItems } from "@/shared/hooks/useNavbarItems";

export default function Home() {
  const { navbarItems } = useNavbarItems();

  return (
    <>
      <div className="container mx-auto h-full px-5">
        <Header navbarItems={navbarItems} />
        <Main />
        <Skills />
        <Portfolio />
        <Experience />
        <Contacts />
      </div>
      <Footer />
    </>
  );
}
