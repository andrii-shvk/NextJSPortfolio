"use client";

import { Header } from "@/components/Header";
import { useNavbarItems } from "@/shared/hooks/useNavbarItems";

export default function Home() {
  
  const {navbarItems} = useNavbarItems();

  return (
    <div className="container mx-auto px-5">
      <div className="h-full xl:grid xl:grid-cols-main xl:gap-2 2xl:gap-10">
        <section className="pt-16">
            <Header navbarItems={navbarItems} />
        </section>
      </div>
    </div>
  );
}
