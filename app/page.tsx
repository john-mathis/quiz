"use client";
import MenuSelection from "./components/MenuSelection/MenuSelection";
import WelcomeHeader from "./components/WelcomeHeader/WelcomeHeader";

export default function Home() {
  return (
    <main className="mx-auto lg:pt-64 lg:w-[55.5rem] lg:h-[28.5] md:bg-auto lg:flex lg:justify-between lg:items-center xl:w-[72.5rem] ">
      <WelcomeHeader />
      <MenuSelection />
    </main>
  );
}
