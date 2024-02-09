var chineseConv = require("chinese-conv");
import PlayVoice from "./PlayVoice";
import { Button } from "./ui/button";
import { Fragment } from "react";

export default function WordDetail({ word }: { word: Hsk }) {
  console.log(word);

  return (
    <div className={``}>
      <div className={`flex justify-center items-center`}>
        <p className={`guoyu text-xl`}>
          {word?.chinese}
          {"〔"}
          {chineseConv.tify(word?.chinese)}
          {"〕"}
        </p>
        <div className={`flex flex-nowrap items-center gap-1`}>
          {word?.pinyin?.map(
            (item, index) =>
              item && (
                <Fragment key={index}>
                  <Button variant={"ghost"}>
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
        <PlayVoice text={word?.chinese as string} />
      </div>
      {word?.khmer.length > 0 && (
        <div
          className={`w-full  flex flex-nowrap gap-2 items-center overflow-auto py-2`}
        >
          {word?.khmer?.map(
            (item, index) =>
              item && (
                <Fragment key={index}>
                  <Button variant={"ghost"}>
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
      )}
      {word.english.length > 0 && (
        <div
          className={`w-full flex flex-nowrap gap-2 items-center overflow-auto py-2`}
        >
          {word?.english?.map(
            (item, index) =>
              item && (
                <Fragment key={index}>
                  <Button variant={"ghost"}>
                    {/* <CiCircleCheck size={18} /> */}
                    <span className={`text-lg pinyin`}>{item && item}</span>
                  </Button>
                  {index < word?.english.length - 1 && (
                    <span className="h-6 border-r"></span>
                  )}
                </Fragment>
              )
          )}
        </div>
      )}
    </div>
  );
}
