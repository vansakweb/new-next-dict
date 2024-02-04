"use client";

import { useState } from "react";
import StrokeItem from "@/components/StrokeItem";
import { Button } from "@/components/ui/button";
import StrokeSkeleton from "@/components/StrokeSkeleton";

export default function Stroke({ hanzhis }: { hanzhis: string[] }) {
  const [text, setText] = useState<string | undefined>("");
  const [active, setActive] = useState<string | undefined>("");

  const handleClick = (hanzhi: string) => {
    setText(hanzhi);
    setActive(hanzhi);
  };
  return (
    <div className="flex-1 flex flex-col -justify-center items-center">
      {text && <StrokeItem hanzhi={text as string} />}
      {hanzhis && !text && <StrokeSkeleton text={hanzhis[0]} />}
      <div className="p-4 flex items-center w-full gap-2 overflow-x-auto hide-scroll snap-none">
        {hanzhis &&
          hanzhis.map((hanzhi: string, index: number) => (
            <div key={index}>
              <Button
                variant={active == hanzhi ? "default" : "secondary"}
                className={`text-lg guoyu`}
                onClick={() => handleClick(hanzhi)}
              >
                {hanzhi}
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
}
