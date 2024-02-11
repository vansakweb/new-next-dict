import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { Button } from "@/components/ui/button";

export default function EditWordBtn({ wordId }: { wordId: number }) {
  return (
    <div>
      <Link href={`/dashboard/word/edit/${wordId}`}>
        <Button size={"icon"} variant={"ghost"}>
          <CiEdit size={20} className="text-blue-500" />
        </Button>
      </Link>
    </div>
  );
}
