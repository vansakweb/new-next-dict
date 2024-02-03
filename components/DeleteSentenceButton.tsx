"use client";
import { CiCircleRemove } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DeleteSentenceButton({
  sentenceId,
}: {
  sentenceId: number;
}) {
  const router = useRouter();

  const handleDelete = async () => {
    // console.log(sentenceId);
    const res = await fetch(`/api/sentence/${sentenceId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log("data", data);
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <div>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={() => handleDelete()}
      >
        <CiCircleRemove size={20} />
      </Button>
    </div>
  );
}
