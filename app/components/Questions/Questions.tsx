"use client";
import { useState } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import Image from "next/image";

interface QuestionProps {
  QUESTIONS: Array<{ question: string; options: string[]; answer: string }>;
}

const indexToLetter = (index: number) => String.fromCharCode(65 + index); // Move helper function outside

export default function Questions({ QUESTIONS }: QuestionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOptionSelected, setIsOptionSelected] = useState(true);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);

  const handleNext = () => {
    if (selectedOption) {
      if (selectedOption === currentAnswer) {
        setQuestionsCorrect(questionsCorrect + 1);
      }
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsOptionSelected(true);
        setSelectedOption(""); // Reset the selected option for the next question
      } else {
        // Handle the case where it's the last question
      }
    } else {
      setIsOptionSelected(false);
    }
  };

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const currentOptions = currentQuestion.options;
  const currentAnswer = currentQuestion.answer;

  return (
    <section className="mx-auto mb-6 lg:mt-10 flex flex-col lg:flex-row lg:justify-between w-[20rem] xs:w-[15rem] md:w-[40rem] lg:w-[55.5rem] xl:w-[72.5rem]">
      <div className=" pb-4 lg:w-[30rem] h-[8.06rem] xl:ml-44 mb-8">
        <p className="dark:text-[--light-grey] italic text-center lg:text-left">
          Question {currentQuestionIndex + 1} of {QUESTIONS.length}
        </p>
        <p className="font-semibold mt-6 text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.25rem] text-center lg:text-left">
          {currentQuestion.question}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center lg:items-end lg:w-[48.5rem]">
        {currentOptions.map((option, index) => (
          <div
            key={index}
            onClick={() => setSelectedOption(option)}
            className={`flex items-center pl-3 h-16 w-[20.43rem] md:w-[40rem] lg:w-[30.25rem] mb-4 bg-white dark:bg-[--grey-navy] rounded-lg cursor-pointer ${
              selectedOption === option ? "border-4 border-purple-500" : ""
            }`}
          >
            <p className="rounded flex items-center justify-center bg-[--light-grey] text-black w-[2rem] h-[2rem] mr-2">
              {indexToLetter(index)}
            </p>
            <p>{option}</p>
          </div>
        ))}
        <SubmitButton action={handleNext} />

        {!isOptionSelected && (
          <div className="flex flex-row justify-center items-center mt-8 text-center m-auto">
            <Image
              className="text-white"
              src={"/icon-error.svg"}
              alt="error icon"
              width={32}
              height={32}
            />
            <p>Please select an answer</p>
          </div>
        )}
      </div>
    </section>
  );
}
