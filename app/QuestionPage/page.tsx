import Questions from "../components/Questions/Questions";
import QuizData from "../data.json";

export default function question() {
  // Data.quizzes[]
  // 0 - HTML
  // 1 - CSS
  // 2 - JavaScript
  // 3 - Accessability
  const HTML = QuizData.quizzes;

  return (
    <div className="mx-auto flex flex-col items-center justify-between xl:items-end xl:w-[72.5rem]">
      <Questions QUESTIONS={HTML} OPTIONS={HTML} />
    </div>
  );
}
