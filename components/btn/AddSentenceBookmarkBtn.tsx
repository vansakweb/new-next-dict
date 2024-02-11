"use client";

import { CiBookmarkPlus } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useBookMarkContextContext } from "@/contexts/Bookmark";

export default function AddSentenceBookmarkBtn({
  sentence,
}: {
  sentence: Sentence;
}) {
  const { sentences, setSentences } = useBookMarkContextContext();

  const addBookmark = () => {
    const newSentences: Sentence[] | [] = [...sentences];
    newSentences.push(sentence);
    setSentences(newSentences);
    localStorage.setItem("sentences", JSON.stringify(newSentences));
  };

  return (
    <Button size={"icon"} variant={"ghost"} onClick={() => addBookmark()}>
      <span>
        <CiBookmarkPlus size={20} className="text-green-500" />
      </span>
    </Button>
  );
}
