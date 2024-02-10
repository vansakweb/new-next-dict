interface User {
  id: number;
  email: string;
  name: string | undefined;
}

interface Hsk {
  id: number;
  chinese: string;
  notone: string;
  khmer: string[];
  pinyin: string[];
  english: string[];
  hsk: string | undefined;
  modified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface Sentence {
  id: number?;
  khmer: string;
  chinese:string[]
  pinyin:string[]
  segment: Segment[];
}
interface Segment {
  chinese: string | undefined;
  pinyin: string | undefined;
}
