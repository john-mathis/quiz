"use client";
import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

 export interface QuizQuestionProps {
  question: string;
  options: [];
  answer: string;
}

interface SelectedTopicProps{
  title:string;
  img:string;
}

interface ContextProps {
  quizQuestions: QuizQuestionProps[];
  setQuizQuestions: Dispatch<SetStateAction<QuizQuestionProps[]>>;
  selectedTopic: SelectedTopicProps;
  setSelectedTopic: Dispatch<SetStateAction<SelectedTopicProps>>;
  isQuizComplete:boolean;
  setIsQuizComplete: Dispatch<SetStateAction<boolean>>
}

const defaultValue: ContextProps = {
  quizQuestions: [],
  setQuizQuestions: () => [], // Providing a default no-op function
  selectedTopic: { title: "", img: "" },
  setSelectedTopic: () => {},
  isQuizComplete: false,
  setIsQuizComplete: ()=>{}
};

const AppContext = createContext<ContextProps>(defaultValue);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestionProps[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<SelectedTopicProps>({title:"", img:""})
  const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false)

  return (
    <AppContext.Provider
      value={{
        quizQuestions,
        setQuizQuestions,
        setSelectedTopic,
        selectedTopic,
        isQuizComplete, 
        setIsQuizComplete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
