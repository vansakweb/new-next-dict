"use client";
import { pinyin } from "pinyin-pro";
import ZhuyinItem from "./ZhuyinItem";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
export default function Demo() {
  const [hanzhis, setHanzhis] = useState<string>("你好");
  const pinyins: string[] = pinyin(hanzhis, { type: "array" });
  //   console.log(pinyins);

  const chineseFilter = (chinese: string): string =>
    chinese.match(/[\u4e00-\u9fa5]/g)?.join("") || "";

  const change = (text: string) => {
    const temp = chineseFilter(text);
    setHanzhis(temp as string);
  };
  useEffect(() => {}, [hanzhis]);

  return (
    <div className="p-10">
      <div className="w-72">
        <Input onChange={(event) => change(event.target.value)} />
      </div>
      <div className="flex py-4 px-4 gap-1 flex-wrap">
        {hanzhis.split("").map((_, index) => (
          <ZhuyinItem
            key={index}
            pinyin={pinyins[index]}
            hanzhi={hanzhis.at(index) as string}
          />
        ))}
      </div>
    </div>
  );
}
