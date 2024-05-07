import MenuSelection from "./components/MenuSelection/MenuSelection";
import ToggleMode from "./components/ToggleMode/ToggleMode";
import WelcomeHeader from "./components/WelcomeHeader/WelcomeHeader";

export default function Home() {
  // create a seperate component for this content and just import the single component instead of editing the main div on the root page.
  return (
    <main className="h-screen bg-cover bg-no-repeat bg-left-top bg-[url(/pattern-background-mobile-light.svg)] bg-[--light-grey] dark:bg-[--dark-navy] dark:bg-[url(/pattern-background-mobile-dark.svg)] md:bg-[url(/pattern-background-tablet-light.svg)] dark:md:bg-[url(/pattern-background-tablet-dark.svg)]  lg:bg-[url(/pattern-background-desktop-light.svg)] dark:lg:bg-[url(/pattern-background-desktop-dark.svg)] lg:bg-center lg:bg-cover">
      <ToggleMode/>
      <div className="mx-auto lg:pt-64 lg:w-[55.5rem] lg:h-[28.5] md:bg-auto lg:flex lg:justify-between lg:items-center ">
      <WelcomeHeader />
      <MenuSelection />
      </div>
    </main>
  );
}
