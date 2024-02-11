"use client";
import { CiCircleRemove } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function DeleteSentenceBtn({
  sentenceId,
}: {
  sentenceId: number;
}) {
  return (
    <div>
      <Button size={"icon"} variant={"ghost"}>
        <AlertDialogDemo sentenceId={sentenceId} />
      </Button>
    </div>
  );
}

export function AlertDialogDemo({ sentenceId }: { sentenceId: number }) {
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
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <CiCircleRemove size={20} className="text-red-500" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>តើអ្នកប្រាកដថានឹងលុបមែនទេ?</AlertDialogTitle>
          <AlertDialogDescription>
            លុបឃ្លាប្រយោគចេញពីតារាង។
            ប្រយោគនេះនឹងត្រូវលុបចេញពីទិន្នន័យក្រោយពេលអ្នកចុច &quot;យល់ព្រម&quot;
            !
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="">បដិសេធ</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete()} className="">
            យល់ព្រម
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
