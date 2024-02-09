var fs = require("node:fs");
var pinyin = require("chinese-to-pinyin");
import { log } from "console";

import words from "@/lib/hsk.json";

const convert = () => {
  const converted = words.slice(0, 1000000).map((word) => ({
    chinese: word.chinese,
    notone: pinyin(word.chinese, {
      notone: true,
      removeSpace: true,
    }),
    khmer: word.khmer,
    pinyin: word.pinyin,
    english: word.english,
    hsk: word.hsk,
    tag: word.tag,
  }));

  fs.writeFile(
    "lib/data/convert.json",
    JSON.stringify(converted),
    (err: any) => {
      if (err) {
        console.error(err);
      } else {
        log("converted and writed!");
      }
    }
  );
  //   log(converted);
};
export { convert };
