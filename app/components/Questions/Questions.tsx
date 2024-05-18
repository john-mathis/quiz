"use client";
import { useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Image from "next/image";
import SelectAnswerError from "./SelectAnswerError/SelectAnswerError";

interface QuestionProps {
  QUESTIONS: Array<{ question: string; options: string[]; answer: string }>;
}

const indexToLetter = (index: number) => String.fromCharCode(65 + index); // Move helper function outside

export default function Questions({ QUESTIONS }: QuestionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOptionSelected, setIsOptionSelected] = useState(true);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleNext = () => {
    if (selectedOption) {
      if (selectedOption === correctAnswer) {
        setQuestionsCorrect(questionsCorrect + 1);
      }
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsOptionSelected(true);
        setSelectedOption(""); // Reset the selected option for the next question
        setSubmitClicked(false);
      } else {
        // Handle the case where it's the last question
      }
    } else {
      setIsOptionSelected(false);
    }
  };

  const handleSubmit = () => {
    if (selectedOption) {
      setSubmitClicked(true);
      setIsOptionSelected(true);
      if (selectedOption === correctAnswer) {
        setQuestionsCorrect(questionsCorrect + 1);
      }
    } else {
      setIsOptionSelected(false);
    }
  };

  // if the selected answer is the correct answer, highlight the correct answer with a green border and add a checkmark to the option

  // if the selected answer is the wrong answer, highlight the selected answer with a red border and add a x mark next to it while adding the checkmark next to the correct answer

  // The button should change to next question after the submit an answer button is selected

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const currentOptions = currentQuestion.options;
  const correctAnswer = currentQuestion.answer;

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
            <p onClick={() => setIsOptionSelected(true)}>{option}1</p>
          </div>
        ))}

        {/* Displays the 'Submit Answer' button until an answer is selected and the user clicks on it. It then hides and displays the 'Next Question' button.  */}
        {submitClicked === false && (
          <PrimaryButton action={handleSubmit} text={"Submit Answer"} />
        )}

        {/* Once the 'Submit Answer' button is clicked, the 'Next Question' button is displayed. When the 'Next Question' button is clicked, it is hidden and the 'Submit Answer' button appears again.  */}
        {submitClicked === true && (
          <PrimaryButton action={handleNext} text={"Next Question"} />
        )}

        {isOptionSelected === false && <SelectAnswerError />}
      </div>
    </section>
  );
}
