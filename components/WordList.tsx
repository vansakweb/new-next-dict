"use client";
import Link from "next/link";
import { Input } from "./ui/input";
import { useMemo, useState } from "react";
var chineseConv = require("chinese-conv");

export default function WordList({ words }: { words: Hsk[] }) {
  // console.log(words?.length);

  const [input, setInput] = useState<string | undefined>("");
  const filterSearch = useMemo(() => {
    const chinese = words.filter((word) =>
      chineseConv
        .sify(word.chinese)
        .includes(chineseConv.sify(input?.replaceAll(" ", "") as string))
    );
    const khmer = words.filter((word) =>
      word.khmer.join("").includes(input?.replaceAll(" ", "") as string)
    );
    const pinyin = words.filter((word) =>
      word.removeTone.includes(input?.replaceAll(" ", "") as string)
    );
    // console.log(chinese);
    if (chinese.length) {
      return chinese;
    } else if (khmer.length) {
      return khmer;
    } else if (pinyin.length) {
      return pinyin;
    } else return [];

    // esle{
    //   return khmer ;

    // }
  }, [words, input]);

  return (
    <div className={`h-full w-full flex flex-col gap-2 guoyu`}>
      <div className={`h-fit`}>
        <Input
          className={`h-10 px-4 text-base placeholder:text-base`}
          placeholder="ចិន,ខ្មែរ,ស្រៈប្រកប"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setInput(event.target.value)
          }
          value={input}
        />
      </div>
      <div className={`flex-1 overflow-auto`}>
        <ul>
          {filterSearch.map((word) => (
            <Link key={word.id} href={`/dictionary/${word.id}`}>
              <li className={`guoyu text-base py-2 px-4 border-b`}>
                {word.chinese}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
