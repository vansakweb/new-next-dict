"use client";
import { useBookMarkContextContext } from "@/contexts/Bookmark";
import { Fragment } from "react";
import AddHskBookmarkBtn from "@/components/AddHskBookmarkBtn";
import RemoveHskBookmarkBtn from "@/components/RemoveHskBookmarkBtn";

export default function ToggleHskBookMark({ hsk }: { hsk: Hsk }) {
  const { hsks } = useBookMarkContextContext();

  return (
    <Fragment>
      {hsks.map((hsk) => hsk.id).includes(hsk.id) ? (
        <RemoveHskBookmarkBtn hskId={hsk.id as number} />
      ) : (
        <AddHskBookmarkBtn hsk={hsk} />
      )}
    </Fragment>
  );
}
