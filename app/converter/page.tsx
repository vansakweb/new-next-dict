"use client";

var pinyin = require("chinese-to-pinyin");
var chineseConv = require("chinese-conv");
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Menu {
  value: string;
  title: string;
}
const menus: Menu[] = [
  {
    value: "pinyin",
    title: "ស្រៈប្រកប",
  },
  {
    value: "traditional",
    title: "អក្សរពុម្ព",
  },
  {
    value: "simplified",
    title: "អក្សរកាត់",
  },
];

export default function Converter() {
  const [menu, setMenu] = useState<string | undefined>("pinyin");
  const [input, setInput] = useState<string | undefined>("");
  const [output, setOutputText] = useState<string | undefined>("");

  const chineseFilter = (chinese: string): string =>
    chinese.match(/[\u4e00-\u9fa5]/g)?.join("") || "";

  const copy = (): void => {
    output && navigator.clipboard.writeText(output as string);
  };

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const inputValue = event.target.value;
    const chineseRegex = /^[^\u1780-\u17FF]+$/;
    if (chineseRegex.test(inputValue)) {
      setInput(inputValue);
    } else {
      setInput("");
    }
  };

  useEffect(() => {
    const changeMenu = (): void => {
      menu === "pinyin" &&
        setOutputText(pinyin(chineseConv.sify(chineseFilter(input as string))));
      menu === "traditional" &&
        setOutputText(chineseConv.tify(chineseFilter(input as string)));
      menu === "simplified" &&
        setOutputText(chineseConv.sify(chineseFilter(input as string)));
    };
    changeMenu();
  }, [menu, input]);

  return (
    <section className="h-full overflow-y-auto">
      <div className="">
        <Label htmlFor="input" className={`text-lg battambang`}>
          កម្មវិធីបម្លែងអក្សរ
        </Label>
        <Textarea
          className={`text-lg resize-none rounded-md guoyu placeholder:text-base`}
          placeholder="ចិន"
          rows={5}
          // placeholder="បញ្ចូលអក្សរចិននៅទីនេះ"
          value={input}
          id={`input`}
          onChange={(event) => handleInput(event)}
        ></Textarea>
      </div>

      <div className="mt-10">
        <Label htmlFor="input" className={`text-lg battambang`}>
          លទ្ធផល
        </Label>
        <Textarea
          disabled
          className={`resize-none rounded-md ${
            menu == "pinyin" ? "pinyin text-sm" : "text-lg guoyu"
          }`}
          rows={5}
          value={output}
        ></Textarea>
      </div>

      <div
        className={`mt-4 flex justify-between gap-4 flex-col sm:items-center sm:flex-row`}
      >
        <div className="flex gap-4">
          {/* Menu */}
          <RadioGroup defaultValue="pinyin" className={`flex items-center`}>
            {menus.map((item) => (
              <div
                key={item.value}
                className={`flex items-center space-x-2 battambang`}
                onClick={() => setMenu(item.value)}
              >
                <RadioGroupItem value={item.value} id={item.value} />
                <Label htmlFor={item.value}>{item.title}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <Button
          variant={"secondary"}
          className={`text-lg battambang`}
          onClick={copy}
        >
          ចម្លង
        </Button>
      </div>
    </section>
  );
}
