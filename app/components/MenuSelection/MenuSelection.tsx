import Selection from "../SelectButton/Selection";

export default function MenuSelection() {
  return (
    <section className="flex flex-col justify-between items-center h-[18.25rem] ">
      <Selection img={"/icon-html.svg"} title={"HTML"} />
      <Selection img={"/icon-css.svg"} title={"CSS"} />
      <Selection img={"/icon-js.svg"} title={"Javascript"} />
      <Selection img={"/icon-accessibility.svg"} title={"Accessibility"} />
    </section>
  );
}
