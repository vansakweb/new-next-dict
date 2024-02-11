import PlayVoiceBtn from "@/components/Btn/PlayVoiceBtn";
import CopyTextBtn from "@/components/Btn/CopyTextBtn";
// import EditSentenceBtn from "@/components/btn/EditSentenceBtn";
import ToggleSentenceBookMark from "@/components/Btn/ToggleSentenceBookMark";

export default function ExampleItem({
  sentence,
  chinese,
}: {
  sentence: Sentence;
  chinese: string;
}) {
  return (
    <div className={`h-fit`}>
      <div
        className={`pr-2 flex gap-2 justify-between border shadow-md rounded-md overflow-hidden`}
      >
        <div
          className={`w-fit p-1 flex flex-col gap-0 bg-slate-100 dark:bg-slate-900`}
        >
          <PlayVoiceBtn
            text={sentence.segment.map((seg) => seg.chinese).join("")}
          />
          <CopyTextBtn
            text={sentence.segment.map((seg) => seg.chinese).join("")}
          />
          <ToggleSentenceBookMark sentence={sentence} />
          {/* <EditSentenceBtn sentenceId={sentence.id as number} /> */}
        </div>
        <div
          className={`flex-1 flex flex-col gap-4 justify-center overflow-x-auto`}
        >
          <p className={`battambang text-lg text-blue-500 text-nowrap`}>
            {sentence.khmer}
          </p>
          <div className={`flex gap-1`}>
            {sentence?.segment.map((seg: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col justify-between -hover:bg-slate-200 -dark:hover:bg-slate-800 rounded-md ${
                  seg.chinese == chinese
                    ? "bg-slate-100 dark:bg-slate-900 px-1"
                    : "dark:bg-slate-950"
                } ${
                  index == 0
                    ? "items-start"
                    : sentence.segment.length - 1 == index
                    ? " items-end"
                    : " items-center"
                }`}
              >
                <p className={`pinyin text-sm text-orange-500 text-nowrap`}>
                  {seg.pinyin}
                </p>
                <p className={`guoyu text-xl text-violet-500 text-nowrap`}>
                  {seg.chinese}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
