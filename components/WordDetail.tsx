"use client";

var chineseConv = require("chinese-conv");
import { Fragment } from "react";
import { useEffect } from "react";

import { useShowContext } from "@/contexts/Show";
import BackBtn from "@/components/btn/BackBtn";
import EditWordBtn from "@/components/btn/EditWordBtn";
import PlayVoiceBtn from "@/components/btn/PlayVoiceBtn";
import ExampleItem from "@/components/ExampleItem";
import ToggleHskBookMark from "@/components/btn/ToggleHskBookMark";

export default function WordDetail({
  word,
  sentences,
}: {
  word: Hsk;
  sentences: Sentence[];
}) {
  const { show, setShow } = useShowContext();

  useEffect(() => {
    if (!word) {
      setShow(false);
    }
  }, [word, show, setShow]);
  if (!word) {
    return null;
  }
  return (
    <div
      className={`${
        show ? "flex w-full md:w-9/12" : "hidden md:flex md:w-9/12"
      } h-full md:pl-4 flex-col relative`}
    >
      <div className="absolute left-0 md:hidden">
        <BackBtn setShow={setShow} />
      </div>

      <div className={`h-full flex flex-col`}>
        <div className={`h-fit pb-4 flex flex-col gap-2`}>
          <div className={`flex gap-1 justify-center items-center`}>
            <p className={`guoyu text-xl text-violet-500`}>
              {word?.chinese}
              {word?.chinese != chineseConv.tify(word?.chinese) && (
                <>
                  {"〔"}
                  {chineseConv.tify(word?.chinese)}
                  {"〕"}
                </>
              )}
            </p>
            <div className={`flex flex-nowrap`}>
              <div className="flex-1 flex flex-nowrap gap-1 items-center overflow-auto">
                {word?.pinyin?.map(
                  (item, index) =>
                    item && (
                      <Fragment key={index}>
                        <pre className={`text-sm pinyin text-orange-500`}>
                          {item && item}
                        </pre>
                        {index < word?.pinyin.length - 1 && (
                          <span className="h-4 border-r"></span>
                        )}
                      </Fragment>
                    )
                )}
              </div>
            </div>
            <PlayVoiceBtn text={word?.chinese as string} />
            <EditWordBtn wordId={word.id} />
            <ToggleHskBookMark hsk={word} />
          </div>
          {word?.khmer.length > 0 && (
            <div className={`w-full flex overflow-auto`}>
              <div className="flex-1 flex flex-nowrap gap-2 items-center  overflow-auto">
                {word?.khmer?.map(
                  (item, index) =>
                    item && (
                      <Fragment key={index}>
                        <div className="flex gap-1 items-center py-1 px-2 rounded-md bg-slate-100 dark:bg-slate-900">
                          {/* <BsFillPatchCheckFill
                          size={16}
                          className=" text-violet-500"
                        /> */}
                          <pre className={`text-lg battambang text-blue-500`}>
                            {item && item}
                          </pre>
                        </div>
                        {index < word?.khmer.length - 1 && (
                          <span className="h-6 border-r"></span>
                        )}
                      </Fragment>
                    )
                )}
              </div>
            </div>
          )}
          {word.english.length > 0 && (
            <div className={`w-full flex overflow-auto`}>
              <div className="flex-1 flex flex-nowrap gap-2 items-center overflow-auto">
                {word?.english?.map(
                  (item, index) =>
                    item && (
                      <Fragment key={index}>
                        <div className="flex gap-0.5 items-center py-1 px-2 rounded-md bg-slate-100 dark:bg-slate-900">
                          {/* <BsFillPatchCheckFill
                          size={16}
                          className=" text-violet-500"
                        /> */}
                          <pre className={`text-base pinyin text-green-500`}>
                            {item && item}
                          </pre>
                        </div>
                        {index < word?.english.length - 1 && (
                          <span className="h-6 border-r"></span>
                        )}
                      </Fragment>
                    )
                )}
              </div>
            </div>
          )}
        </div>

        <div className={`flex-1 flex overflow-y-auto`}>
          <div className={`flex w-full flex-col gap-2`}>
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
    </div>
  );
}
