import PlayVoiceBtn from "@/components/btn/PlayVoiceBtn";
import CopyTextBtn from "@/components/btn/CopyTextBtn";
// import EditSentenceBtn from "@/components/EditSentenceBtn";
import ToggleSentenceBookMark from "@/components/btn/ToggleSentenceBookMark";

export default function ExampleItem({
  sentence,
  chinese,
}: {
  sentence: Sentence;
  chinese: string;
}) {
  return (
    <div className={`h-fit w-full`}>
      <div
        className={`w-full pr-2 flex gap-2 justify-between border shadow-md rounded-md overflow-hidden`}
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
          className={`w-full py-3 flex-1 flex flex-col justify-between overflow-x-auto`}
        >
          <pre
            className={`battambang text-lg text-blue-500 overflow-x-auto text-nowrap w-fit`}
          >
            {sentence.khmer}
          </pre>
          <div className={`flex gap-1 w-fit overflow-x-auto`}>
            {sentence?.segment.map((seg: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col -hover:bg-slate-200 -dark:hover:bg-slate-800 rounded-md ${
                  seg.chinese == chinese
                    ? "bg-slate-100 dark:bg-slate-900 px-1"
                    : "dark:bg-slate-950"
                } ${
                  index == 0
                    ? "items-start"
                    : sentence.segment.length - 1 == index
                    ? "-items-end items-center"
                    : "items-center"
                }`}
              >
                <pre
                  className={`pinyin text-sm text-orange-500 overflow-x-auto text-nowrap w-fit`}
                >
                  {seg.pinyin}
                </pre>
                <pre
                  className={`guoyu text-xl text-violet-500 overflow-x-auto text-nowrap w-fit`}
                >
                  {seg.chinese}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
