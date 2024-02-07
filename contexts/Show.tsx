"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type Context = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};
export const ShowContext = createContext<Context>({
  show: false,
  setShow: () => {},
});

export function ShowWrapper({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState<boolean>(false);
  console.log(show);

  return (
    <ShowContext.Provider value={{ show, setShow }}>
      {children}
    </ShowContext.Provider>
  );
}

export const useShowContext = () => useContext(ShowContext);
