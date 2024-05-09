"use client";
import { useState } from "react";
import Data from "../../data.json";
import Image from "next/image";

interface QuestionProps {
  _QUESTIONS: [];
  _OPTIONS: [];
}

export default function Questions({_QUESTIONS, _OPTIONS}: QuestionProps) {

  // _QUESTIONS will be the raw data passed as props into this component to make it resuable
  // _OPTIONS will be the raw data passed as props into this component to make it resuable 

  // TOPIC_QUESTIONS will be the topic specific filtered questions data 
  // TOPIC_OPTIONS will be the topic specific filtered options data 

  const [currentQuestionIndex, setCurrentQuestionIndex] =useState(0)

  const handleNext = ()=>{
    if(currentQuestionIndex < _QUESTIONS.length-1 ){
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const TOPIC_QUESTIONS = Data.quizzes[0].questions
  const TOPIC_OPTIONS = Data.quizzes[0].questions[currentQuestionIndex].options

  console.log(TOPIC_QUESTIONS)
console.log(TOPIC_OPTIONS)

  const indexToLetter = (index:number) => {
    return String.fromCharCode(65 + index); // 65 is the ASCII value for 'A'
  };

  return (
    <section className="mx-auto flex flex-col items-center w-[20rem] xs:w-[15rem] md:w-[40rem] lg:w-[30.25rem]">
      <div className="h-[8.06rem]">
      <p className="text-center">Question {currentQuestionIndex + 1} of 10 </p>
      <p className="text-[1.25rem]">{_QUESTIONS[currentQuestionIndex]['question']}</p>
      </div>

      <div className="flex flex-col justify-center">
        {_OPTIONS.map((option, index)=>{
          return(
            <div key={option} className="flex items-center pl-3 h-16 w-[20.43rem] md:w-[40rem] lg:w-[30.25rem] mt-4 bg-white dark:bg-[--grey-navy] rounded-lg cursor-pointer">
              <p className=" rounded flex items-center justify-center bg-[--light-grey] text-black w-[2rem] h-[2rem] mr-2" >{indexToLetter(index)}</p>
              <p className="">{option}</p>
              </div>)
        })}



        <button onClick={handleNext}>next</button>
      </div>



    </section>
  );
}
