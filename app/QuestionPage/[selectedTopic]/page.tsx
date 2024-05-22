"use client";
import { useAppContext } from "@/app/context";
import Questions from "@/app/components/Questions/Questions";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Question() {
  const { quizQuestions, selectedTopic } = useAppContext();
  return (
    <div className="mx-auto flex flex-col items-center justify-between xl:items-end xl:w-[72.5rem]">
      <Questions QUESTIONS={quizQuestions} />
    </div>
  );
}
