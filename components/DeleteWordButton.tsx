"use client";
import { CiCircleRemove } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DeleteWordButton({ wordId }: { wordId: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    // console.log(wordId);
    const res = await fetch(`/api/hsk/${wordId}`, {
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
      <Button size={"icon"} variant={"ghost"} onClick={() => handleDelete()}>
        <CiCircleRemove size={20} className="text-red-600" />
      </Button>
    </div>
  );
}
