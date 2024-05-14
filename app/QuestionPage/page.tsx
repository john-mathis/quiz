"use client";
import { useAppContext } from "../context";
import Questions from "../components/Questions/Questions";
import QuizData from "../data.json";

export default function Question() {
  // Data.quizzes[]
  // 0 - HTML
  // 1 - CSS
  // 2 - JavaScript
  // 3 - Accessability
  const HTML = QuizData.quizzes;

  //This component will take the state which was set in the Menu Selection component and pass it to the questions component.

  return (
    <div className="mx-auto flex flex-col items-center justify-between xl:items-end xl:w-[72.5rem]">
      <Questions QUESTIONS={HTML} OPTIONS={HTML} />
    </div>
  );
}
