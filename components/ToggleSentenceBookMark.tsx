"use client";
import { useBookMarkContextContext } from "@/contexts/Bookmark";
import AddSentenceBookmarkBtn from "@/components/AddSentenceBookmarkBtn";
import RemoveSentenceBookmarkBtn from "@/components/RemoveSentenceBookmarkBtn";
import { Fragment } from "react";

export default function ToggleSentenceBookMark({
  sentence,
}: {
  sentence: Sentence;
}) {
  const { sentences } = useBookMarkContextContext();

  return (
    <Fragment>
      {sentences.map((sent) => sent.id).includes(sentence.id) ? (
        <RemoveSentenceBookmarkBtn sentenceId={sentence.id as number} />
      ) : (
        <AddSentenceBookmarkBtn sentence={sentence} />
      )}
    </Fragment>
  );
}
