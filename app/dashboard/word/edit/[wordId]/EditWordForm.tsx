"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

interface FormData {
  chinese: string;
  khmer: string[];
  pinyin: string[];
}
export default function EditWordForm({ word }: { word: Hsk }) {
  const router = useRouter();
  const { chinese, khmer, pinyin } = word;
  const [chineseInput, setChineseInput] = useState<string>(chinese as string);
  const [khmerInput, setKhmerInput] = useState<string[]>(khmer);
  const [pinyinInput, setPinyinInput] = useState<string[]>(pinyin);
  const [formData, setFormData] = useState<FormData>({
    chinese: chinese as string,
    khmer,
    pinyin,
  });

  // ADD
  const addKhmer = () => {
    setKhmerInput([...khmerInput, ""]);
  };
  const addPinyin = () => {
    setPinyinInput([...pinyinInput, ""]);
  };

  // REMOVE
  const removeKhmer = (index: number) => {
    const initail = [...khmerInput];
    initail.splice(index, 1);
    setKhmerInput(initail);
    setFormData({ chinese: chineseInput, khmer: initail, pinyin: pinyinInput });
  };
  const removePinyin = (index: number) => {
    const initail = [...pinyinInput];
    initail.splice(index, 1);
    setPinyinInput(initail);
    setFormData({ chinese: chineseInput, khmer: khmerInput, pinyin: initail });
  };
  // CHANGE
  const changeChinese = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setChineseInput(event.target.value);
    setFormData({
      chinese: event.target.value,
      khmer: khmerInput,
      pinyin: pinyinInput,
    });
  };
  const changeKhmer = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    event.preventDefault();
    const initail = [...khmerInput];
    initail[index] = event.target.value;
    setKhmerInput(initail);
    setFormData({ chinese: chineseInput, khmer: initail, pinyin: pinyinInput });
  };
  const changePinyin = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    event.preventDefault();
    const initail = [...pinyinInput];
    initail[index] = event.target.value;
    setPinyinInput(initail);
    setFormData({ chinese: chineseInput, khmer: khmerInput, pinyin: initail });
  };

  // SUBMIT
  const handleSave = async () => {
    // console.log("formData", formData);
    const res = await fetch(`/api/hsk/${word.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log("data", data);
    if (res.ok) {
      router.back();
      router.refresh();
    }
  };
  const handleCancel = () => {
    router.back();
  };

  return (
    <div className={`flex flex-col gap-2 battambang`}>
      {/* chinese */}
      <Label className="mt-4 text-lg">ចិន</Label>
      <div className={``}>
        <Input
          value={chineseInput}
          className={`text-lg guoyu placeholder:text-base`}
          placeholder="ចិន"
          onChange={(event) => changeChinese(event)}
        />
      </div>

      {/* khmer */}
      <Label className="mt-4 text-lg">ខ្មែរ</Label>
      <div className={`flex gap-x-4 gap-y-2 w-full flex-wrap`}>
        {khmerInput.map((khmer, index) => (
          <div key={index} className={`flex gap-1`}>
            <Input
              value={khmer}
              className="w-fit text-lg placeholder:text-base"
              placeholder="ខ្មែរ"
              onChange={(event) => changeKhmer(event, index)}
            />
            <Button
              disabled={khmerInput.length <= 1}
              variant={"destructive"}
              size={"icon"}
              onClick={() => removeKhmer(index)}
            >
              <CiCircleRemove size={20} />
            </Button>
          </div>
        ))}
        <Button variant={"secondary"} size={"icon"} onClick={addKhmer}>
          <IoIosAddCircleOutline size={20} />
        </Button>
      </div>
      {/* pinyin */}
      <Label className="mt-4 text-lg">ស្រៈប្រកប</Label>
      <div className={`flex gap-x-4 gap-y-2 w-full flex-wrap`}>
        {pinyinInput.map((pinyin, index) => (
          <div key={index} className={`flex gap-1`}>
            <Input
              value={pinyin}
              className={`w-fit text-sm pinyin placeholder:text-base`}
              placeholder="ស្រៈប្រកប"
              onChange={(event) => changePinyin(event, index)}
            />
            <Button
              disabled={pinyinInput.length <= 1}
              variant={"destructive"}
              size={"icon"}
              onClick={() => removePinyin(index)}
            >
              <CiCircleRemove size={20} />
            </Button>
          </div>
        ))}
        <Button variant={"secondary"} size={"icon"} onClick={addPinyin}>
          <IoIosAddCircleOutline size={20} />
        </Button>
      </div>
      <div className="flex gap-2 mt-4">
        <Button
          className="text-lg"
          onClick={handleCancel}
          variant={"destructive"}
        >
          មិនកែសម្រួល
        </Button>
        <Button className="text-lg" onClick={handleSave} variant={"secondary"}>
          កែសម្រួល
        </Button>
      </div>
    </div>
  );
}
