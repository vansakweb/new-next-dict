"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Context {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}
export const ShowContext = createContext<Context>();

export function ShowWrapper({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState<boolean>(false);
  console.log(show);

  return (
    <ShowContext.Provider value={{ show, setShow }}>
      {children}
    </ShowContext.Provider>
  );
}
