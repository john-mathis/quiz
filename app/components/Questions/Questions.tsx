"use client";
import { useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SelectAnswerError from "../SelectAnswerError/SelectAnswerError";
import { useAppContext } from "@/app/context";
import QuizComplete from "../QuizComplete/QuizComplete";

interface QuestionProps {
  QUESTIONS: Array<{ question: string; options: []; answer: string }>;
}

const indexToLetter = (index: number) => String.fromCharCode(65 + index); // Helper function

export default function Questions({ QUESTIONS }: QuestionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOptionSelected, setIsOptionSelected] = useState(true);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [endOfQuiz, setEndOfQuiz] = useState(false);
  const {selectedTopic} = useAppContext()

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const { options: currentOptions, answer: correctAnswer } = currentQuestion;

  

  const handleNext = () => {
    if (selectedOption) {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        resetStateForNextQuestion();
      } else {
        setEndOfQuiz(true);
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
        setQuestionsCorrect((prev) => prev + 1);
      }
    } else {
      setIsOptionSelected(false);
    }
  };

  const handleOptionClick = (option: string) => {
    if (!submitClicked) {
      setSelectedOption(option);
    }
  };

  const resetStateForNextQuestion = () => {
    setSelectedOption("");
    setSubmitClicked(false);
    setIsOptionSelected(true);
  };

  const handleEndOfQuiz = () => {
    setEndOfQuiz(false);
    setCurrentQuestionIndex(0);
    setQuestionsCorrect(0);
    resetStateForNextQuestion();
  };

  const renderOptions = () => {
    return currentOptions.map((option, index) => {
      const isSelected = selectedOption === option;
      const isCorrect = option === correctAnswer;
  
      let borderColorClass = "";
      if (submitClicked) {
        if (isCorrect) {
          borderColorClass = "border-2 border-green-500";
        } else if (isSelected && !isCorrect) {
          borderColorClass = "border-2 border-red-500";
        }
      } else if (isSelected) {
        borderColorClass = "border-2 border-purple-500";
      }

      return (
        <div
          key={index}
          onClick={() => handleOptionClick(option)}
          className={`flex items-center pl-3 h-16 xs:w-[18rem] xs:h-20 xs:px-2 w-[20.43rem] md:w-[40rem] lg:w-[30.25rem] xl:w-[35rem] mb-4 bg-white dark:bg-[--grey-navy] rounded-lg cursor-pointer ${borderColorClass}`}
        >
          <p className="rounded flex items-center justify-center bg-[--light-grey] text-black w-[2rem] h-[2rem] ml-2 mr-4">
            {indexToLetter(index)}
          </p>
          <p>{option}</p>
        </div>
      );
    });
  };

  return (
    <>
      {!endOfQuiz ? (
        <section className="mx-auto mb-6 lg:mt-10 flex flex-col lg:flex-row lg:justify-between w-[20rem] xs:w-[15rem] md:w-[40rem] lg:w-[55.5rem] xl:w-[72.5rem]">
          <div className="pb-4 lg:w-[30rem] h-[8.06rem] mb-8">
            <p className="mt-6 dark:text-[--light-grey] italic text-center lg:text-left">
              Question {currentQuestionIndex + 1} of {QUESTIONS.length}
            </p>
            <p className="font-semibold my-6 text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.1rem] text-center lg:text-left">
              {currentQuestion.question}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center lg:items-end lg:w-[48.5rem] my-16">
            {renderOptions()}

            {!submitClicked ? (
              <PrimaryButton action={handleSubmit} text="Submit Answer" />
            ) : (
              <PrimaryButton action={handleNext} text="Next Question" />
            )}

            {!isOptionSelected && <SelectAnswerError />}
          </div>
        </section>
      ) : (
        <>
          <QuizComplete questionsCorrect={questionsCorrect} topic={selectedTopic}/>
          <PrimaryButton action={handleEndOfQuiz} text="Play Again" />
        </>
      )}
    </>
  );
}
