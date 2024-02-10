import { hsk } from "@/lib/data";
import { sentence } from "@/lib/data";
import { Fragment, Suspense } from "react";
import DemoLoading from "@/components/DemoLoading";
import WordDetail from "@/components/WordDetail";

export default async function Word({ params }: { params: { id: number } }) {
  const word: Hsk = await hsk.one(Number(params.id));
  if (!word) {
    return null;
  }
  const sentences: Sentence[] = await sentence.search(word.chinese);
  return (
    <Fragment>
      <Suspense fallback={<DemoLoading />}>
        {/* <DemoLoading /> */}
        <WordDetail word={word} sentences={sentences} />
      </Suspense>
    </Fragment>
  );
}
