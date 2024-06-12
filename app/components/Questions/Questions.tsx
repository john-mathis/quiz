import { useEffect, useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SelectAnswerError from "../SelectAnswerError/SelectAnswerError";
import { useAppContext } from "@/app/context";
import QuizComplete from "../QuizComplete/QuizComplete";
import { useRouter, useSearchParams } from "next/navigation";

interface QuestionProps {
  QUESTIONS: Array<{ question: string; options: []; answer: string }>;
}

// Converts index in numerical order to alphabetical order.
const indexToLetter = (index: number) => String.fromCharCode(65 + index); // Helper function

export default function Questions({ QUESTIONS }: QuestionProps) {
// Used to manage the routing.
  const router = useRouter();
  const searchParams = useSearchParams();
   // Brings in global state from the useAppContext component. 
   const { selectedTopic, isQuizComplete, setIsQuizComplete } = useAppContext();
  // Keeps track of the current question within the quiz.
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Keeps track of the current selected option based on user input. 
  const [selectedOption, setSelectedOption] = useState("");
  // Keeps track of if an option has been selected (not submitted).
  const [isOptionSelected, setIsOptionSelected] = useState(true);
  // Keeps track of the amount of correct answers the user has submitted.
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  // Keeps track of whether or not the submit button has been clicked. 
  const [submitClicked, setSubmitClicked] = useState(false);

// Uses the data passed into the component as props to filter to the current question.
  const currentQuestion = QUESTIONS[currentQuestionIndex];
  // Uses the data passed into the component as props to filter the current question's answers and correct answer. 
  const { options: currentOptions, answer: correctAnswer } = currentQuestion;
  

  useEffect(() => {
    // Retrieve the value of the "topic" query parameter from the URL
    const mack = searchParams.get("topic");
    // Log the retrieved value to the console
    
  },);
  
  


  const handleOptionClick = (option: string) => {
    // If the submit button has not been clicked...
    if (!submitClicked) {
      // Set the selected option to the clicked option
      setSelectedOption(option);
    }
  };


  const handleSubmit = () => {
    // If the user has selected an answer option...
    if (selectedOption) {
      // Indicate that the submit button has been clicked
      setSubmitClicked(true);
      // Confirm that an option has been selected
      setIsOptionSelected(true);
      // If the selected option is correct...
      if (selectedOption === correctAnswer) {
        // Increment the count of correct answers
        setQuestionsCorrect((prev) => prev + 1);
      }
    } else {
      // If no answer option is selected, indicate the selection is required
      setIsOptionSelected(false);
    }
  };



const handleNext = () => {
  // If the user has selected an answer option...
  if (selectedOption) {
    // and if there are more questions remaining...
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      // Move to the next question
      setCurrentQuestionIndex((prev) => prev + 1);
      // Reset the UI for the next question
      resetStateForNextQuestion();
    } else {
      // If it's the last question, mark the quiz as complete
      setIsQuizComplete(true);
    }
  } else {
    // If no answer option is selected, indicate the selection is required
    setIsOptionSelected(false);
  }
};

const resetStateForNextQuestion = () => {
  // Clear the selected option
  setSelectedOption("");
  // Reset the submit button state
  setSubmitClicked(false);
}

  const handleEndOfQuiz = () => {
    // Set the quiz completion state to false, indicating it's not completed
    setIsQuizComplete(false);
    // Reset the current question index to start from the beginning
    setCurrentQuestionIndex(0);
    // Reset the count of correct answers to zero
    setQuestionsCorrect(0);
    // Reset the UI state for the next question
    resetStateForNextQuestion();
  
    // Redirect to the beginning of the quiz with completion status false
    router.push(
      `/QuestionPage/topic=${selectedTopic.title}&complete=false`
    );
  };
  

  const renderOptions = () => {
    // Map through each option in the currentOptions array
    return currentOptions.map((option, index) => {
      // Check if the current option is selected
      const isSelected = selectedOption === option;
      // Check if the current option is correct
      const isCorrect = option === correctAnswer;
  
      // Determine the border color class based on various conditions
      let borderColorClass = "";
      if (submitClicked) {
        // If the submit button is clicked...
        if (isCorrect) {
          // If the option is correct, set the border color to green
          borderColorClass = "border-2 border-green-500";
        } else if (isSelected && !isCorrect) {
          // If the option is selected but not correct, set the border color to red
          borderColorClass = "border-2 border-red-500";
        }
      } else if (isSelected) {
        // If the option is selected (but submit button is not clicked), set the border color to purple
        borderColorClass = "border-2 border-purple-500";
      }
  
      // Return the JSX for rendering each option
      return (
        <div
          key={index}
          onClick={() => handleOptionClick(option)}
          className={`flex items-center pl-3 h-16 xs:w-[18rem] xs:h-20 xs:px-2 w-[20.43rem] md:w-[40rem] lg:w-[30.25rem] xl:w-[35rem] mb-4 bg-white dark:bg-[--grey-navy] rounded-lg cursor-pointer ${borderColorClass}`}>
          
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
     {!isQuizComplete ? (
  // If the quiz is not complete...
  <section className="mx-auto mb-6 lg:mt-10 flex flex-col lg:flex-row lg:justify-between w-[20rem] xs:w-[15rem] md:w-[40rem] lg:w-[55.5rem] xl:w-[72.5rem]">
    {/* Display question information */}
    <div className="pb-4 lg:w-[30rem] h-[8.06rem] mb-8">
      <p className="mt-6 dark:text-[--light-grey] italic text-center lg:text-left">
        Question {currentQuestionIndex + 1} of {QUESTIONS.length}
      </p>
      <p className="font-semibold my-6 text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.1rem] text-center lg:text-left">
        {currentQuestion.question}
      </p>
    </div>

    {/* Render options for the current question */}
    <div className="flex flex-col justify-center items-center lg:items-end lg:w-[48.5rem] my-16">
      {renderOptions()} {/* Render answer options */}
      
      {/* Render Submit Answer button if answer is not submitted yet, otherwise render Next Question button */}
      {!submitClicked ? (
        <PrimaryButton action={handleSubmit} text="Submit Answer" />
      ) : (
        <PrimaryButton action={handleNext} text="Next Question" />
      )}

      {/* Display error message if an option is not selected */}
      {!isOptionSelected && <SelectAnswerError />}
    </div>
  </section>
) : (
  // If the quiz is complete, render the QuizComplete component and a button to play again
  <div className="lg:flex flex-col items-end">
    <QuizComplete
      questionsCorrect={questionsCorrect}
      topic={selectedTopic}
    />
    <PrimaryButton action={handleEndOfQuiz} text="Play Again" />
  </div>
)}

    </>
  );
}
