"use client";

import { CiBookmarkMinus } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useBookMarkContextContext } from "@/contexts/Bookmark";

export default function RemoveSentenceBookmarkBtn({
  sentenceId,
}: {
  sentenceId: number;
}) {
  const { sentences, setSentences } = useBookMarkContextContext();

  const removeBookmark = () => {
    const newSentences: Sentence[] | [] = sentences.filter(
      (sentence) => sentence.id != sentenceId
    );
    setSentences(newSentences);
    localStorage.setItem("sentences", JSON.stringify(newSentences));
  };

  return (
    <Button size={"icon"} variant={"ghost"} onClick={() => removeBookmark()}>
      <span>
        <CiBookmarkMinus size={20} className="text-red-500" />
      </span>
    </Button>
  );
}
