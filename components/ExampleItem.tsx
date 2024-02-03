import { sentence } from "@/lib/data";
import PlayVoice from "@/components/PlayVoice";
import CopyText from "@/components/CopyText";
import AddBookmark from "./AddBookmark";

export default async function ExampleItem({ search }: { search: string }) {
  const sentences: any = await sentence.search(search);

  return (
    <div className={`flex flex-col gap-2 px-4`}>
      {sentences?.map((sentence: Sentence) => (
        <div
          key={sentence.id}
          className={`bg-slate-400- py-2 px-2 border shadow-md rounded-md`}
        >
          <div className={`flex gap-2 justify-between`}>
            <div className={`w-fit flex flex-col gap-0`}>
              <PlayVoice
                text={sentence.segment.map((seg) => seg.chinese).join("")}
              />
              <CopyText
                text={sentence.segment.map((seg) => seg.chinese).join("")}
              />
              <AddBookmark
                text={sentence.segment.map((seg) => seg.chinese).join("")}
              />
            </div>
            <div className={`flex-1 flex flex-col gap-4 justify-center`}>
              <p className={`text-lg battambang`}>{sentence.khmer}</p>
              <div className={`flex gap-0.5`}>
                {sentence?.segment.map((seg: any, index: number) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-2 px-2 justify-between hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md ${
                      seg.chinese == search
                        ? "bg-slate-100 dark:bg-slate-900"
                        : "dark:bg-slate-950"
                    } ${
                      index == 0
                        ? "items-start"
                        : sentence.segment.length - 1 == index
                        ? " items-end"
                        : " items-center"
                    }`}
                  >
                    <p className={`text-sm pinyin`}>{seg.pinyin}</p>
                    <p className={`text-base guoyu`}>{seg.chinese}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
