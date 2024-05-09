"use client";

import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Skills } from "@/components/Skills";
import { useNavbarItems } from "@/shared/hooks/useNavbarItems";

export default function Home() {
  const { navbarItems } = useNavbarItems();

  return (
    <div className="container mx-auto px-5">
      <div className="h-full">
        <Header navbarItems={navbarItems} />
        <Main />
        <Skills />
      </div>
    </div>
  );
}
