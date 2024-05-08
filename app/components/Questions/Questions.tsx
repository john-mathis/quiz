"use client";
import Data from "../../data.json";

interface QuestionProps {
  question: string;
  letterChoice: string;
  answerChoice: string;
}

export default function Answers({
  question,
  letterChoice,
  answerChoice,
}: QuestionProps) {
  const HTML_DATA = Data.quizzes[0].questions;
  console.log(HTML_DATA);
  return (
    <section>
      <div className=" flex justify-start items-center px-3 w-[20rem] xs:w-[15rem] md:w-[40rem] lg:w-[30.25rem] h-16 bg-white dark:bg-[--grey-navy] rounded-lg text-white cursor-pointer">
        <p>Question {1} of 10 </p>
        {HTML_DATA.map((a) => {
          return <></>;
        })}
        <p className="ml-4 text-[--dark-navy] dark:text-white">{}</p>
      </div>
    </section>
  );
}
