"use client";

import HanziWriter from "hanzi-writer";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function StrokeItem({ text }: { text: string }) {
  const { theme } = useTheme();

  const strokeRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const stroke: any = strokeRef.current;
    const platStroke = (text: string) => {
      stroke.innerHTML = "";
      var writer = HanziWriter.create(stroke, text, {
        width: 150,
        height: 150,
        padding: 4,
        delayBetweenLoops: 3000,
        strokeColor: `${theme === "dark" ? "#FFF" : "#000"}`,
        outlineColor: "#64748B",
        radicalColor: `${theme === "dark" ? "#FFF" : "#000"}`,
        strokeAnimationSpeed: 0.5,
      });
      writer.loopCharacterAnimation();
    };
    platStroke(text);
  }, [text, theme]);

  return (
    <div
      className={`${theme != "dark" && "bg-white"} rounded-lg border shadow-md`}
      ref={strokeRef}
    ></div>
  );
}
