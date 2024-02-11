"use client";

import { PiStarFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { useBookMarkContextContext } from "@/contexts/Bookmark";

export default function RemoveHskBookmarkBtn({ hskId }: { hskId: number }) {
  const { hsks, setHsks } = useBookMarkContextContext();

  const RemoveHskBookmark = () => {
    const newHsk: Hsk[] | [] = hsks.filter((hsk) => hsk.id != hskId);
    setHsks(newHsk);
    localStorage.setItem("hsks", JSON.stringify(newHsk));
  };

  return (
    <Button size={"icon"} variant={"ghost"} onClick={() => RemoveHskBookmark()}>
      <span>
        <PiStarFill size={20} className="text-green-500" />
      </span>
    </Button>
  );
}
