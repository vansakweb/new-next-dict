"use client";

import Bihua from "@/components/Bihua";
import Stroke from "@/components/Stroke";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function StrokPage() {
  const [inputText, setInputText] = useState<string | undefined>("");
  const [uniqeTextArray, setUniqeTextArray] = useState<string[] | null>(null);

  const filterInput = (txt: string) => {
    setInputText(txt);
    const filter = txt && txt.match(/[\u4e00-\u9fa5]/g);
    const uniqe = filter && Array.from(new Set(filter));
    uniqe && setUniqeTextArray(uniqe);
  };

  return (
    <main className={`min-h-screen- px-8 guoyu`}>
      <div
        className={`max-w-screen-xl mian flex flex-col sm:flex-row justify-between mx-auto`}
      >
        <div className="w-full sm:w-3/12 gap-2 space-y-4 p-4 h-fit">
          <Input
            value={inputText}
            onChange={(event) => filterInput(event.target.value)}
            className={`h-10 w-full text-base placeholder:text-base`}
            placeholder="ចិន"
          />
          {uniqeTextArray && inputText && <Stroke hanzhis={uniqeTextArray} />}
        </div>
        <div
          className={`w-full sm:w-9/12 space-y-4 p-4 flex-1 overflow-auto sm:overscroll-none`}
        >
          {uniqeTextArray && inputText && <Bihua hanzhis={uniqeTextArray} />}
        </div>
      </div>
    </main>
  );
}
