"use client";
import { CiMedicalClipboard } from "react-icons/ci";
import { Button } from "@/components/ui/button";

export default function CopyTextBtn({ text }: { text: string }) {
  const copy = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <Button size={"icon"} variant={"ghost"}>
      <span onClick={() => copy()}>
        <CiMedicalClipboard size={20} className="text-sky-500" />
      </span>
    </Button>
  );
}
