import { hsk } from "@/lib/data";
import EditWordForm from "./EditWordForm";

export default async function EditWord({
  params,
}: {
  params: { wordId: string };
}) {
  const data: Hsk = await hsk.one(Number(params.wordId));

  if (!data) {
    return (
      <div className={`w-full flex justify-center items-center`}>
        <p>Word no found!</p>
      </div>
    );
  }
  return (
    <div>
      <EditWordForm word={data} />
    </div>
  );
}
