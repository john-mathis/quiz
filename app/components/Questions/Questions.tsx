"use client";
import { useState } from "react";
import Data from "../../data.json";
import Image from "next/image";

interface QuestionProps {
  question: string;
  letterChoice: string;
  answerChoice: string;
}

export default function Questions({
  question,
  letterChoice,
  answerChoice,
}: QuestionProps) {

  const [currentQuestionIndex, setCurrentQuestionIndex] =useState(0)

  const handleNext = ()=>{
    if(currentQuestionIndex < HTML_QUESTIONS.length-1 ){
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const HTML_DATA = Data.quizzes[0];
  const HTML_QUESTIONS = Data.quizzes[0].questions
  const HTML_OPTIONS = Data.quizzes[0].questions[currentQuestionIndex].options
  
  return (
    <section className="mx-auto flex flex-col items-center">

      <div>
      <p>Question {currentQuestionIndex + 1} of 10 </p>
      {HTML_QUESTIONS[currentQuestionIndex].question}
      </div>



{/* flex flex-col justify-start items-center px-3 w-[20rem] xs:w-[15rem] md:w-[40rem] lg:w-[30.25rem]  bg-white dark:bg-[--grey-navy] rounded-lg text-white cursor-pointer */}
      <div className="flex flex-col justify-center">
        {HTML_OPTIONS.map((o)=>{
          return(
            <p key={o} className=" pl-4 h-16 w-[20.43rem] md:w-[40rem] lg:w-[30.25rem] mt-4 bg-white dark:bg-[--grey-navy] rounded-lg cursor-pointer">{o}</p>
          )
        })}
        <button onClick={handleNext}>next</button>
      </div>



    </section>
  );
}
