"use client";
import { useEffect } from "react";
import { useAppContext } from "@/app/context";
import Selection from "../SelectButton/Selection";
import Link from "next/link";
import QUIZ_DATA from "../../data.json";
export default function MenuSelection() {
  const HTML_QUESTIONS = QUIZ_DATA.quizzes[0].questions;
  const CSS_QUESTIONS = QUIZ_DATA.quizzes[1].questions;
  const JAVASCRIPT_QUESTIONS = QUIZ_DATA.quizzes[2].questions;
  const ACCESSABILITY_QUESTIONS = QUIZ_DATA.quizzes[3].questions;

  const { topic, setTopic } = useAppContext();

  // This component needs to set the state and give the link the data based on what link is clicked.

  return (
    <section className="flex flex-col justify-between items-center h-[18.25rem] ">
      <Link href={"/QuestionPage"} onClick={() => console.log("HTML")}>
        <Selection img={"/icon-html.svg"} title={"HTML"} />
      </Link>
      <Link href={"/QuestionPage"} onClick={() => console.log("CSS")}>
        <Selection img={"/icon-css.svg"} title={"CSS"} />
      </Link>
      <Link href={"/QuestionPage"} onClick={() => console.log("JS")}>
        <Selection img={"/icon-js.svg"} title={"Javascript"} />
      </Link>
      <Link href={"/QuestionPage"} onClick={() => console.log("AC")}>
        <Selection img={"/icon-accessibility.svg"} title={"Accessibility"} />
      </Link>
    </section>
  );
}
