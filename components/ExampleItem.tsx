import PlayVoiceBtn from "@/components/BTN/PlayVoiceBtn";
import CopyTextBtn from "@/components/BTN/CopyTextBtn";
import AddBookmarkBtn from "./BTN/AddBookmarkBtn";
import EditSentenceBtn from "./BTN/EditSentenceBtn";

export default async function ExampleItem({
  sentence,
  chinese,
}: {
  sentence: Sentence;
  chinese: string;
}) {
  return (
    <div className={`py-2 px-2 border shadow-md rounded-md`}>
      <div className={`flex gap-2 justify-between`}>
        <div className={`w-fit flex flex-col gap-0`}>
          <PlayVoiceBtn
            text={sentence.segment.map((seg) => seg.chinese).join("")}
          />
          <CopyTextBtn
            text={sentence.segment.map((seg) => seg.chinese).join("")}
          />
          {/* <AddBookmarkBtn
            text={sentence.segment.map((seg) => seg.chinese).join("")}
          /> */}
          <EditSentenceBtn sentenceId={sentence.id} />
        </div>
        <div className={`flex-1 flex flex-col gap-4 justify-center`}>
          <p className={`battambang text-lg text-violet-500`}>
            {sentence.khmer}
          </p>
          <div className={`flex gap-0.5`}>
            {sentence?.segment.map((seg: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col gap-2 px-2 justify-between hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md ${
                  seg.chinese == chinese
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
                <p className={`pinyin text-sm text-blue-500`}>{seg.pinyin}</p>
                <p className={`guoyu text-xl text-green-500`}>{seg.chinese}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
