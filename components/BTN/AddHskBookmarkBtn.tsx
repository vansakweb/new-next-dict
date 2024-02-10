"use client";

import { CiStar } from "react-icons/ci";
import { Button } from "../ui/button";
import { useBookMarkContextContext } from "@/contexts/Bookmark";

export default function AddHskBookmarkBtn({ hsk }: { hsk: Hsk }) {
  const { hsks, setHsks } = useBookMarkContextContext();

  const addBookmark = () => {
    const newHsk: Hsk[] | [] = [...hsks];
    newHsk.push(hsk);
    setHsks(newHsk);
    localStorage.setItem("hsks", JSON.stringify(newHsk));
  };

  return (
    <Button size={"icon"} variant={"ghost"} onClick={() => addBookmark()}>
      <span>
        <CiStar size={20} className="text-green-500" />
      </span>
    </Button>
  );
}
