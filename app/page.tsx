import MenuSelection from "./components/MenuSelection/MenuSelection";
import ToggleMode from "./components/ToggleMode/ToggleMode";
import WelcomeHeader from "./components/WelcomeHeader/WelcomeHeader";

export default function Home() {
  return (
    <main className="h-screen bg-cover bg-no-repeat bg-left-top bg-[url(/pattern-background-mobile-light.svg)] bg-[--light-grey] dark:bg-[--dark-navy] dark:bg-[url(/pattern-background-mobile-dark.svg)] md:bg-[url(/pattern-background-tablet-light.svg)] dark:md:bg-[url(/pattern-background-tablet-dark.svg)] md:bg-auto lg:flex lg:items-center lg:px-20">
      <WelcomeHeader />
      <MenuSelection />
    </main>
  );
}
