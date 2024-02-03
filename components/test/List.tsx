"use client";

import { useState } from "react";

type Props = {};

interface Segment {
  chinese: string;
  pinyin: string;
}

interface Data {
  khmer: string | undefined;
  segment: Segment[];
}
export default function List({}: Props) {
  const [khmer, setKhmer] = useState<string | undefined>("");
  const [segment, setSegment] = useState<Segment[]>([
    { chinese: "", pinyin: "" },
  ]);
  const [datas, setDatas] = useState<Data>();

  const clict = () => {
    const tempData = { khmer, segment };
    // console.log(tempData);
    console.log(datas);
  };
  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    const temp = [...segment];
    temp.splice(index, 1);
    setSegment(temp);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    const temp: Segment[] = [...segment];
    // @ts-ignore
    temp[index][name] = value;
    setSegment(temp);
    const tempCH = segment.map((i) => i.chinese);
    const tempPY = segment.map((i) => i.pinyin);
    const sak = { khmer, chinese: tempCH, pinyin: tempPY };
    console.log(sak);

    setDatas({ khmer, segment });
  };
  const handleAdd = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const temp = [...segment, { chinese: "", pinyin: "" }];
    setSegment(temp);
    clict();
  };
  return (
    <div className="flex flex-col justify-center items-center pt-10 gap-10">
      <p className="text-lg font-bold">Table Title</p>
      <form className="mx-auto border rounded-md flex flex-col gap-2 p-4">
        <div className="grid grid-cols-12">
          <input
            type="text"
            name="khmer"
            value={khmer}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setKhmer(event.target.value)
            }
            className="p-2 rounded-md outline-none text-slate-800 col-span-10"
            placeholder="Khmer"
          />
        </div>
        {segment.map((data, index) => (
          <div
            key={index}
            className=" w-full grid grid-cols-12 items-center gap-2"
          >
            <input
              type="text"
              name="chinese"
              value={data.chinese}
              onChange={(event) => handleChange(event, index)}
              className="p-2 rounded-md outline-none text-slate-800 col-span-4"
              placeholder="Chinese"
            />
            <input
              type="text"
              name="pinyin"
              value={data.pinyin}
              onChange={(event) => handleChange(event, index)}
              className="p-2 rounded-md outline-none text-slate-800 col-span-6"
              placeholder="Pinyin"
            />
            {/* {datas?.length !== 1 && ( */}
            <button
              disabled={segment?.length === 1}
              className="rounded-md p-2 bg-red-600 col-span-2"
              onClick={(event) => handleDelete(event, index)}
            >
              Delete
            </button>
            {/* )} */}
          </div>
        ))}
        <div className=" w-full grid grid-cols-12 items-center gap-2">
          <button
            className="rounded-md p-2 bg-blue-600 col-start-11 col-span-2"
            onClick={(event) => handleAdd(event)}
          >
            Add More
          </button>
        </div>
      </form>
    </div>
  );
}
