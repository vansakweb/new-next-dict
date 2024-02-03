import { hsk } from "@/lib/data";
import WordItem from "@/components/WordItem";
import ExampleItem from "@/components/ExampleItem";

export default async function WordDetail({
  params,
}: {
  params: { id: number };
}) {
  const word: any = await hsk.one(Number(params.id));

  if (!word) {
    return null;
  }
  return (
    <div className={`h-full flex flex-col`}>
      <div className={`h-fit pb-4 px-4`}>
        <WordItem word={word} />
      </div>
      <div className={`flex-1 overflow-auto`}>
        <ExampleItem search={word.chinese} />
      </div>
    </div>
  );
}
