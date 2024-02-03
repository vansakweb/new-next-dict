"use client";
import { CiMedicalClipboard } from "react-icons/ci";
import { Button } from "./ui/button";

export default function CopyText({ text }: { text: string }) {
  const copy = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <Button size={"icon"} variant={"ghost"}>
      <span onClick={() => copy()}>
        <CiMedicalClipboard size={20} />
      </span>
    </Button>
  );
}
