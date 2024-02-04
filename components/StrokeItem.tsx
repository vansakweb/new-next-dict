"use client";

import HanziWriter from "hanzi-writer";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function StrokeItem({ hanzhi }: { hanzhi: string }) {
  const { theme } = useTheme();

  const strokeRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const stroke: any = strokeRef.current;
    const platStroke = (hanzhi: string) => {
      stroke.innerHTML = "";
      var writer = HanziWriter.create(stroke, hanzhi, {
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
    platStroke(hanzhi);
  }, [hanzhi, theme]);

  return (
    <div
      className={`${theme != "dark" && "bg-white"} rounded-lg border shadow-md`}
      ref={strokeRef}
    ></div>
  );
}
