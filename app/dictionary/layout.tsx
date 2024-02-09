import DictionaryLoading from "@/components/DictionaryLoading";
import WordList from "@/components/WordList";
import { Fragment, Suspense } from "react";
import { hsk } from "@/lib/data";

export default async function DictionaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await hsk.all(0, 10000);
  const words: Hsk[] = res?.hsks;

  return (
    <div className="max-w-screen-xl mian py-4 px-2 flex mx-auto">
      <Suspense fallback={<DictionaryLoading />}>
        <WordList words={words} />
      </Suspense>
      <Fragment>{children}</Fragment>
    </div>
  );
}
