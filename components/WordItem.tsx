var chineseConv = require("chinese-conv");
import PlayVoice from "./PlayVoice";
import { Button } from "./ui/button";
import { Fragment } from "react";

export default function WordItem({ word }: { word: Hsk }) {
  return (
    <div className={``}>
      <div className={`flex items-center`}>
        <p className={`text-lg guoyu`}>
          {word?.chinese}
          {"〔"}
          {chineseConv.tify(word?.chinese)}
          {"〕"}
        </p>
        <PlayVoice text={word?.chinese as string} />
      </div>
      <div className={`flex flex-nowrap items-center gap-1`}>
        {word?.pinyin?.map(
          (item, index) =>
            item && (
              <Fragment key={index}>
                <Button
                  variant={"ghost"}
                  className={`whitespace-nowrap py-1 px-2`}
                >
                  {/* <CiCircleCheck size={18} /> */}
                  <span className={`text-sm pinyin`}>{item && item}</span>
                </Button>
                {index < word?.pinyin.length - 1 && (
                  <span className="h-4 border-r"></span>
                )}
              </Fragment>
            )
        )}
      </div>
      <div
        className={`w-full flex flex-nowrap gap-2 items-center overflow-auto py-2`}
      >
        {word.khmer &&
          word?.khmer?.map(
            (item, index) =>
              item && (
                <Fragment key={index}>
                  <Button
                    variant={"ghost"}
                    className={`whitespace-nowrap py-1 px-2`}
                  >
                    {/* <CiCircleCheck size={18} /> */}
                    <span className={`text-lg battambang`}>{item && item}</span>
                  </Button>
                  {index < word?.khmer.length - 1 && (
                    <span className="h-6 border-r"></span>
                  )}
                </Fragment>
              )
          )}
      </div>
    </div>
  );
}
