import { hsk } from "@/lib/data";
import { sentence } from "@/lib/data";
// import WordDetail from "@/components/WordDetail";
// import ExampleItem from "@/components/ExampleItem";
import WordDetailItem from "./WordDetailItem";

export default async function Word({ params }: { params: { id: number } }) {
  const word: Hsk = await hsk.one(Number(params.id));
  if (!word) {
    return null;
  }
  const sentences: Sentence[] = await sentence.search(word.chinese);
  return <WordDetailItem word={word} sentences={sentences} />;
}
