import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { Button } from "@/components/ui/button";

export default function EditSentenceBtn({
  sentenceId,
}: {
  sentenceId: number;
}) {
  return (
    <div>
      <Link href={`/dashboard/sentence/edit/${sentenceId}`}>
        <Button size={"icon"} variant={"ghost"}>
          <CiEdit size={20} className="text-blue-500" />
        </Button>
      </Link>
    </div>
  );
}
