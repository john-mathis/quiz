"use client";
import React, { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

interface ContextProps {
  topic: [];
  setTopic: Dispatch<SetStateAction<[]>>;
}

const defaultValue: ContextProps = {
  topic: [],
  setTopic: () => [], // Providing a default no-op function
};

const AppContext = createContext<ContextProps>(defaultValue);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
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
