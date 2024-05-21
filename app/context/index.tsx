"use client";
import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

interface ContextProps {
  quizQuestions: [];
  setQuizQuestions: Dispatch<SetStateAction<[]>>;
  selectedTopic: {};
  setSelectedTopic: Dispatch<SetStateAction<{ title: string; img: string }>>;
}

const defaultValue: ContextProps = {
  quizQuestions: [],
  setQuizQuestions: () => [], // Providing a default no-op function
  selectedTopic: { title: "", img: "" },
  setSelectedTopic: () => {},
};

const AppContext = createContext<ContextProps>(defaultValue);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [quizQuestions, setQuizQuestions] = useState<[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<{}>({});

  return (
    <AppContext.Provider
      value={{
        quizQuestions,
        setQuizQuestions,
        setSelectedTopic,
        selectedTopic,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
