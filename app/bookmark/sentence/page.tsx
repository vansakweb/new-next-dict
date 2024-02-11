// import { convert } from "@/lib/data/convert";
"use client";

import { Fragment } from "react";

import { useBookMarkContextContext } from "@/contexts/Bookmark";
import ExampleItem from "@/components/ExampleItem";
import ToggleBookMark from "@/components/ToggleSentenceBookMark";

export default function SentenceBookmark() {
  //   convert();
  const { sentences } = useBookMarkContextContext();

  return (
    <div>
      <div className="p-2 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
        {sentences.map((sentence, index) => {
          return (
            <Fragment key={index}>
              <ExampleItem chinese="" sentence={sentence} />
              {/* <ToggleBookMark id={sentence.id as number} /> */}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
