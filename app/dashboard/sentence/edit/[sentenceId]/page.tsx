import { sentence } from "@/lib/data";
import EditSentenceForm from "./EditSentenceForm";

export default async function EditSentence({
  params,
}: {
  params: { sentenceId: string };
}) {
  const data: any = await sentence.one(Number(params.sentenceId));

  if (!data) {
    return (
      <div className={`w-full flex justify-center items-center`}>
        <p>Sentence no found!</p>
      </div>
    );
  }
  return <section>{<EditSentenceForm sentence={data} />}</section>;
}
