"use client";

import { CiVolumeHigh } from "react-icons/ci";
import { Button } from "@/components/ui/button";

export default function PlayVoiceBtn({ text }: { text: string }) {
  const playVice = () => {
    window.speechSynthesis.cancel();
    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.lang = "zh";
    speechMsg.text = text;
    window.speechSynthesis.speak(speechMsg);
  };

  return (
    <Button size={"icon"} variant={"ghost"}>
      <span onClick={() => playVice()}>
        <CiVolumeHigh size={20} className="text-fuchsia-500" />
      </span>
    </Button>
  );
}
