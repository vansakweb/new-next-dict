const chineseFilter = (chinese: string): string =>
  chinese.match(/[\u4e00-\u9fa5]/g)?.join("") || "";

const khmerFilter = (khmer: string): string =>
  khmer.match(/[\u1780-\u17FF]/g)?.join("") || "";

const zhuyinFilter = (zhuyin: string): string =>
  zhuyin.match(/[\u3105-\u312C\u31A0-\u31B7\u02D9]+[ˊˇˋ˙]?/g)?.join("") || "";

const pinyinFilter = (pinyin: string): string =>
  pinyin.match(/[a-zA-ZüÜāáǎàēéěèīíǐìōóǒòūúǔùüÜ]+(?:\d)?/g)?.join("") || "";

// console.log("Chinese: ", chineseFilter("你好|សួរស្តី|ㄋㄧˇㄏㄠˇ|nǐhǎo"));
// console.log("Khmer: ", khmerFilter("你好|សួរស្តី|ㄋㄧˇㄏㄠˇ|nǐhǎo"));
// console.log("Pinyin: ", pinyinFilter("你好|សួរស្តី|ㄋㄧˇㄏㄠˇ|nǐhǎo"));
// console.log("Zhuyin: ", zhuyinFilter("你好|សួរស្តី|ㄋㄧˇㄏㄠˇ|nǐhǎo"));

const filter = {
  ch: chineseFilter,
  kh: khmerFilter,
  zh: zhuyinFilter,
  py: pinyinFilter,
};
export { filter };
