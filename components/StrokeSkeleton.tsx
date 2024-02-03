"use client";

import HanziWriter from "hanzi-writer";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function StrokeSkeleton({ text }: { text: string }) {
  const { theme } = useTheme();
  const strokeRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const stroke: any = strokeRef.current;
    stroke.innerHTML = "";
    HanziWriter.create(stroke, text, {
      width: 150,
      height: 150,
      padding: 4,
      outlineColor: "#64748B",
      strokeColor: "#64748B",
    });
  }, [text]);

  return (
    <div
      className={`${theme != "dark" && "bg-white"} rounded-lg border shadow-md`}
      ref={strokeRef}
    ></div>
  );
}
