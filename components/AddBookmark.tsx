"use client";

import { CiBookmarkPlus } from "react-icons/ci";
import { Button } from "./ui/button";

export default function AddBookmark({ text }: { text: string }) {
  return (
    <Button size={"icon"} variant={"ghost"}>
      <span>
        <CiBookmarkPlus size={20} />
      </span>
    </Button>
  );
}
