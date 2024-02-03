"use client";

import HanziWriter from "hanzi-writer";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function BihuaItem({ hanzhi }: { hanzhi: any }) {
  const targetRef = useRef<null | HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const target: any = targetRef.current;
    target.innerHTML = "";
    function renderFanningStrokes(target: any, strokes: any) {
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.style.width = "60px";
      svg.style.height = "60px";
      svg.style.border = `1px solid ${theme === "dark" ? "#FFF" : "#000"}`;
      svg.style.borderRadius = "4px";
      //   svg.style.marginRight = "3px";
      target.appendChild(svg);
      var group = document.createElementNS("http://www.w3.org/2000/svg", "g");

      // set the transform property on the g element so the character renders at 75x75
      var transformData = HanziWriter.getScalingTransform(60, 60);
      group.setAttributeNS(null, "transform", transformData.transform);
      svg.appendChild(group);

      strokes.forEach(function (strokePath: any) {
        var path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        path.setAttributeNS(null, "d", strokePath);
        // style the character paths
        path.style.fill = `${theme === "dark" ? "#FFF" : "#000"}`;
        group.appendChild(path);
      });
    }

    HanziWriter.loadCharacterData(hanzhi).then(function (charData) {
      // @ts-ignore
      for (var i = 0; i < charData.strokes.length; i++) {
        // @ts-ignore
        var strokesPortion = charData.strokes.slice(0, i + 1);
        renderFanningStrokes(target, strokesPortion);
      }
    });
  }, [hanzhi, theme]);

  return (
    hanzhi && (
      <div className="flex w-full- items-center gap-2 overflow-auto">
        <div
          ref={targetRef}
          className={`${
            theme != "dark" && "bg-white"
          } rounded-md flex gap-2 pb-4`}
        ></div>
      </div>
    )
  );
}
