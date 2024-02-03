import DictionaryLoading from "@/components/DictionaryLoading";
import WordList from "@/components/WordList";
import { Suspense } from "react";
import { hsk } from "@/lib/data";

export default async function DictionaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await hsk.all(0, 10000);
  const words: Hsk[] = res?.hsks;

  return (
    <div className="max-w-screen-xl mian py-4 flex mx-auto">
      <Suspense fallback={<DictionaryLoading />}>
        <div className="w-3/12">
          <WordList words={words} />
        </div>
        <div className={`w-9/12 h-full`}>{children}</div>
      </Suspense>
    </div>
  );
}
