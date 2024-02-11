"use client";

import { Fragment } from "react";

import { useBookMarkContextContext } from "@/contexts/Bookmark";
import ExampleItem from "@/components/ExampleItem";
import ToggleBookMark from "@/components/ToggleSentenceBookMark";
import Link from "next/link";

export default function WordBookmark() {
  const { hsks } = useBookMarkContextContext();

  return (
    <div className="w-full">
      <div className="p-2 grid gap-x-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6">
        {hsks.map((hsk, index) => {
          return (
            <Fragment key={index}>
              <Link href={`/dictionary/${hsk.id}`}>
                <div className="py-2 px-3 text-xl guoyu border-b  text-violet-500">
                  {hsk.chinese}
                </div>
              </Link>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
