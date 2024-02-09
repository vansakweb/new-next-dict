"use client";

import { CiBookmarkPlus } from "react-icons/ci";
import { Button } from "../ui/button";

export default function AddBookmarkBtn({ text }: { text: string }) {
  return (
    <Button size={"icon"} variant={"ghost"}>
      <span>
        <CiBookmarkPlus size={20} className="text-yellow-500" />
      </span>
    </Button>
  );
}
