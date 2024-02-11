"use client";

import { useBookMarkContextContext } from "@/contexts/Bookmark";
import ExampleItem from "@/components/ExampleItem";
import { Fragment } from "react";

export default function SentenceBookmark() {
  const { sentences } = useBookMarkContextContext();

  return (
    <div className="w-full">
      <div className="p-2 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
        {sentences.map((sentence, index) => {
          return (
            <Fragment key={index}>
              <ExampleItem chinese="" sentence={sentence} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
