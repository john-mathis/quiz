import MenuSelection from "./components/MenuSelection/MenuSelection";
import ToggleMode from "./components/ToggleMode/ToggleMode";
import WelcomeHeader from "./components/WelcomeHeader/WelcomeHeader";

export default function Home() {
  // create a seperate component for this content and just import the single component instead of editing the main div on the root page.
  return (
    <main className="">
      {/* <ToggleMode/> */}
      <div className="mx-auto lg:pt-64 lg:w-[55.5rem] lg:h-[28.5] md:bg-auto lg:flex lg:justify-between lg:items-center ">
      <WelcomeHeader />
      <MenuSelection />
      </div>
    </main>
  );
}
