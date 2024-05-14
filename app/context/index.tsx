"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  topic: [];
  setTopic: Dispatch<SetStateAction<[]>>;
}

const AppContext = createContext<ContextProps>({
  topic: [],
  setTopic: (): [] => [],
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [topic, setTopic] = useState<[]>([]);

  return (
    <AppContext.Provider value={{ topic, setTopic }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
