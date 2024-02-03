import { pinyinToZhuyin } from "pinyin-zhuyin";

export default function ZhuyinItem({
  pinyin,
  hanzhi,
}: {
  pinyin: string;
  hanzhi: string;
}) {
  const pinyinFilter = (pinyin: string): string =>
    pinyin.match(/[a-zA-ZüÜāáǎàēéěèīíǐìōóǒòūúǔùüÜ]+(?:\d)?/g)?.join("") || "";

  const chineseFilter = (zhuyin: string) =>
    zhuyin.match(/[\u4e00-\u9fa5]/g)?.join("");

  return (
    <div
      className={`flex items-center hover:bg-slate-800 p-1 rounded-sm guoyu`}
    >
      <p className="text-xl">{chineseFilter(hanzhi)}</p>
      <div className="flex flex-col -space-y-1 relative">
        {pinyinToZhuyin(pinyinFilter(pinyin))
          .split("")
          .map((item, index) => (
            <span
              key={index}
              className={`leading-tight ${
                item == "ˊ"
                  ? "absolute text-[10px] -right-1.5 top-2/4 +-translate-y-2/4"
                  : item == "ˇ"
                  ? "absolute text-[10px] -right-1.5 top-2/4 +-translate-y-2/4"
                  : item == "ˋ"
                  ? "absolute text-[10px] -right-1.5 top-2/4 +-translate-y-2/4"
                  : item == "˙"
                  ? "absolute text-[10px] -top-0.5 right-1/2 translate-x-1/2"
                  : "text-[12px]"
              }`}
            >
              {item}
            </span>
          ))}
      </div>
    </div>
  );
}
