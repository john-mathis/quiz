"use client"
import { useAppContext } from "../context";
import Questions from "../components/Questions/Questions";


export default function Question() {
  const {topic} = useAppContext()
  return (
    <div className="mx-auto flex flex-col items-center justify-between xl:items-end xl:w-[72.5rem]">
      <Questions QUESTIONS={topic} />
    </div>
  );
}
