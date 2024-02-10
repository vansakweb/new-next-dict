"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Context = {
  hsks: Hsk[];
  setHsks: Dispatch<SetStateAction<Hsk[]>>;
  sentences: Sentence[];
  setSentences: Dispatch<SetStateAction<Sentence[]>>;
};
export const BookMarkContext = createContext<Context>({
  hsks: [],
  setHsks: () => {},
  sentences: [],
  setSentences: () => {},
});

export function BookMarkWrapper({ children }: { children: React.ReactNode }) {
  const [hsks, setHsks] = useState<Hsk[] | []>([]);
  const [sentences, setSentences] = useState<Sentence[] | []>([]);

  useEffect(() => {
    const storageData = localStorage.getItem("hsks");
    if (storageData) {
      setHsks(JSON.parse(storageData));
    }
  }, []);
  useEffect(() => {
    const storageData = localStorage.getItem("sentences");
    if (storageData) {
      setSentences(JSON.parse(storageData));
    }
  }, []);

  return (
    <BookMarkContext.Provider
      value={{ hsks, setHsks, sentences, setSentences }}
    >
      {children}
    </BookMarkContext.Provider>
  );
}

export const useBookMarkContextContext = () => useContext(BookMarkContext);
