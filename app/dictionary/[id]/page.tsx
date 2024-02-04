

import { hsk } from "@/lib/data";
import { sentence } from "@/lib/data";
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

  const sentences: any = await sentence.search(word.chinese);
  return (
    <div className={`h-full flex flex-col`}>
      <div className={`h-fit pb-4 px-4`}>
        <WordItem word={word} />
      </div>

      <div className={`flex-1 flex overflow-y-auto`}>
        <div className={`flex w-full flex-col gap-2 px-4`}>
          {sentences?.map((sentence: Sentence, index: number) => (
            <ExampleItem
              key={index}
              sentence={sentence}
              chinese={word.chinese}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
