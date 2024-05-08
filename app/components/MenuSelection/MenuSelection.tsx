import Selection from "../SelectButton/Selection";
import Link from "next/link";

export default function MenuSelection() {
  return (
    <section className="flex flex-col justify-between items-center h-[18.25rem] ">
      <Link href={"/QuestionPage"}><Selection img={"/icon-html.svg"} title={"HTML"} /></Link>
      <Link href={"/QuestionPage"}><Selection img={"/icon-css.svg"} title={"CSS"} /></Link>
      <Link href={"/QuestionPage"}><Selection img={"/icon-js.svg"} title={"Javascript"} /></Link>
      <Link href={"/QuestionPage"}><Selection img={"/icon-accessibility.svg"} title={"Accessibility"} /></Link>
    </section>
  );
}
