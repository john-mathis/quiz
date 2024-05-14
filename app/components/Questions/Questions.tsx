"use client";
import { useState } from "react";
import Data from "../../data.json";
import Image from "next/image";
import SubmitButton from "../SubmitButton/SubmitButton";

interface QuestionProps {
  QUESTIONS: any;
  OPTIONS: any;
}

export default function Questions({ QUESTIONS, OPTIONS }: QuestionProps) {
  // _QUESTIONS will be the raw data passed as props into this component to make it resuable
  // _OPTIONS will be the raw data passed as props into this component to make it resuable

  // TOPIC_QUESTIONS will be the topic specific filtered questions data
  // TOPIC_OPTIONS will be the topic specific filtered options data

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < TOPIC_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const indexToLetter = (index: number) => {
    return String.fromCharCode(65 + index); // 65 is the ASCII value for 'A'
  };

  const TOPIC_QUESTIONS = Data.quizzes[0].questions;
  const TOPIC_OPTIONS = TOPIC_QUESTIONS[currentQuestionIndex].options;

  return (
    <section className="mx-auto mb-6 lg:mt-10 flex flex-col lg:flex-row lg:justify-between w-[20rem] xs:w-[15rem] md:w-[40rem] lg:w-[55.5rem] xl:w-[72.5rem]">
      <div className=" lg:w-[30rem] h-[8.06rem] xl:ml-44">
        <p className=" dark:text-[--light-grey] italic text-center lg:text-left">
          Question {currentQuestionIndex + 1} of 10
        </p>
        <p className="font-semibold	 mt-6 text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.25rem] text-center lg:text-left">
          {TOPIC_QUESTIONS[currentQuestionIndex].question}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center lg:items-end lg:w-[48.5rem] ">
        {TOPIC_OPTIONS.map((option: any, index: number) => {
          return (
            <div
              key={index}
              className="flex items-center pl-3 h-16 w-[20.43rem] md:w-[40rem] lg:w-[30.25rem] mb-4 bg-white dark:bg-[--grey-navy] rounded-lg cursor-pointer"
            >
              <p className=" rounded flex items-center justify-center bg-[--light-grey] text-black w-[2rem] h-[2rem] mr-2">
                {indexToLetter(index)}
              </p>
              <p className="">{option}</p>
            </div>
          );
        })}
        <SubmitButton action={handleNext} />
      </div>
    </section>
  );
}
