"use client";
import WordDetail from "@/components/WordDetail";
import ExampleItem from "@/components/ExampleItem";
import { useShowContext } from "@/contexts/Show";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

import { IoIosArrowBack } from "react-icons/io";

export default function WordDetailItem({
  word,
  sentences,
}: {
  word: Hsk;
  sentences: Sentence[];
}) {
  const { show, setShow } = useShowContext();

  useEffect(() => {
    if (!word) {
      setShow(false);
    }
  }, [word, show, setShow]);
  if (!word) {
    return null;
  }
  return (
    <div
      className={`${
        show ? "flex w-full md:w-9/12" : "hidden md:flex md:w-9/12"
      } h-full flex-col relative`}
    >
      <div className="absolute left-0 md:hidden">
        <Button size={"icon"} variant={"ghost"} onClick={() => setShow(false)}>
          <IoIosArrowBack size={20} />
        </Button>
      </div>

      <div className={`h-full flex flex-col`}>
        <div className={`h-fit pb-4`}>
          <WordDetail word={word} />
        </div>

        <div className={`flex-1 flex overflow-y-auto`}>
          <div className={`flex w-full flex-col gap-2`}>
            {sentences?.map((sentence: Sentence, index: number) => (
              <ExampleItem
                key={index}
                sentence={sentence}
                chinese={word.chinese}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
