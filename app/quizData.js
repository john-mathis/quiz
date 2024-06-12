import QUIZ_DATA from "../app/data.json"

const {quizzes}= QUIZ_DATA;

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


  export default quizTopics;