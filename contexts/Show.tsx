"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
// interface State {
//   show: boolean;
// }
// type Context = {
//   show: State;
//   setShow: Dispatch<SetStateAction<boolean>>;
// };
export const ShowContext = createContext<any>(false);

export function ShowWrapper({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState<boolean>(false);
  console.log(show);

  return (
    <ShowContext.Provider value={{ show, setShow }}>
      {children}
    </ShowContext.Provider>
  );
}
