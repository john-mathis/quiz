"use client";
import { useAppContext, QuizQuestionProps } from "@/app/context";
import Selection from "../SelectButton/Selection";
import Link from "next/link";
import QUIZ_DATA from "../../data.json";
import { useRouter } from "next/navigation";

export default function MenuSelection() {
  const { quizzes } = QUIZ_DATA;
  const { setQuizQuestions, setSelectedTopic } = useAppContext();
  const path = useRouter();

  // There is a more effcient way to gather this data.
  const quizTopics = [
    { questions: quizzes[0].questions, img: "/icon-html.svg", title: "HTML" },
    { questions: quizzes[1].questions, img: "/icon-css.svg", title: "CSS" },
    {
      questions: quizzes[2].questions,
      img: "/icon-js.svg",
      title: "Javascript",
    },
    {
      questions: quizzes[3].questions,
      img: "/icon-accessibility.svg",
      title: "Accessibility",
    },
  ];

  const handleClick = (quiz: any) => {
    setQuizQuestions(quiz.questions as QuizQuestionProps[]);
    setSelectedTopic({
      title: quiz.title,
      img: quiz.img,
    });
  };

  return (
    <section className="flex flex-col justify-between items-center h-[18.25rem]">
      {quizTopics.map((quiz, index) => (
        <Link
          href={`/QuestionPage/${quiz.title}`}
          key={index}
          onClick={() => handleClick(quiz)}
        >
          <Selection img={quiz.img} title={quiz.title} />
        </Link>
      ))}
    </section>
  );
}
