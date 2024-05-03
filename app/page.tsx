import MenuSelection from "./components/MenuSelection/MenuSelection";
import ToggleMode from "./components/ToggleMode/ToggleMode";
import WelcomeHeader from "./components/WelcomeHeader/WelcomeHeader";

export default function Home() {
  return (
    <main className=" h-screen bg-cover bg-no-repeat bg-left-top bg-[url(/pattern-background-mobile-light.svg)] bg-[--light-grey] dark:bg-[--dark-navy] dark:bg-[url(/pattern-background-mobile-dark.svg)]">
      <ToggleMode />
      <WelcomeHeader />
      <MenuSelection />
    </main>
  );
}
