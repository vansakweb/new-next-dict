var chineseConv = require("chinese-conv");
import EditWordBtn from "./BTN/EditWordBtn";
import PlayVoiceBtn from "./BTN/PlayVoiceBtn";
import { Button } from "./ui/button";
import { Fragment } from "react";

export default function WordDetail({ word }: { word: Hsk }) {
  console.log(word);

  return (
    <div className={``}>
      <div className={`flex justify-center items-center`}>
        <p className={`guoyu text-xl text-green-500`}>
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
                    <span className={`text-sm pinyin text-blue-500`}>
                      {item && item}
                    </span>
                  </Button>
                  {index < word?.pinyin.length - 1 && (
                    <span className="h-4 border-r"></span>
                  )}
                </Fragment>
              )
          )}
        </div>
        <PlayVoiceBtn text={word?.chinese as string} />
        <EditWordBtn wordId={word.id} />
      </div>
      {word?.khmer.length > 0 && (
        <div
          className={`w-full py-2 flex flex-nowrap gap-2 items-center overflow-auto`}
        >
          {word?.khmer?.map(
            (item, index) =>
              item && (
                <Fragment key={index}>
                  <Button variant={"ghost"}>
                    {/* <CiCircleCheck size={18} /> */}
                    <span className={`text-lg battambang text-violet-500`}>
                      {item && item}
                    </span>
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
                    <span className={`text-lg pinyin text-orange-500`}>
                      {item && item}
                    </span>
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
