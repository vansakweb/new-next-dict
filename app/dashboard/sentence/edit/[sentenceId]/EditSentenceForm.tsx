"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

// interface SegmentData {
//   chinese: string;
//   pinyin: string;
// }
export default function EditSentenceForm({ sentence }: { sentence: Sentence }) {
  const router = useRouter();
  const { khmer, segment } = sentence;
  const [khmerInput, setKhmerInput] = useState(khmer);
  const [segmentInput, setSegmentInput] = useState([...segment]);

  // ADD
  const addSegment = () => {
    setSegmentInput([...segmentInput, { pinyin: "", chinese: "" }]);
  };

  // REMOVE
  const removeDegment = (index: number) => {
    const temp = [...segmentInput];
    temp.splice(index, 1);
    setSegmentInput(temp);
  };
  // CHANGE
  const changeSegment = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    const temp = [...segmentInput];
    // @ts-ignore
    temp[index][name] = value;
    setSegmentInput([...temp]);
  };

  // SUBMIT
  const handleSave = async () => {
    const res = await fetch(`/api/sentence/${sentence.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ khmer: khmerInput, segment: segmentInput }),
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
      {/* khmer */}
      <Label className="mt-4 text-lg">ខ្មែរ</Label>
      <div className={`flex gap-x-4 gap-y-2 w-full flex-wrap`}>
        <Input
          value={khmerInput}
          className="w-full text-lg placeholder:text-base"
          placeholder="ខ្មែរ"
          onChange={(event) => setKhmerInput(event.target.value)}
        />
      </div>
      {/* segment */}
      <Label className="mt-4 text-lg">ចិន-ស្រៈប្រកប</Label>
      <div className={`flex gap-x-4 gap-y-4 w-full flex-wrap`}>
        {segmentInput.map((segm, index) => (
          <div key={index} className={`flex flex-col gap-1`}>
            <div className={`flex gap-1`}>
              <Input
                value={segm.pinyin}
                name="pinyin"
                className={`w-fit text-sm flex-1 pinyin placeholder:text-base`}
                placeholder="ចិន"
                onChange={(event) => changeSegment(event, index)}
              />
              <Button
                disabled={segmentInput.length <= 1}
                variant={"destructive"}
                size={"icon"}
                onClick={() => removeDegment(index)}
              >
                <CiCircleRemove size={20} />
              </Button>
            </div>
            <Input
              value={segm.chinese}
              name="chinese"
              className={`w-fit text-lg guoyu placeholder:text-base`}
              placeholder="ស្រៈប្រកប"
              onChange={(event) => changeSegment(event, index)}
            />
          </div>
        ))}
        <Button
          variant={"secondary"}
          size={"icon"}
          onClick={() => addSegment()}
        >
          <IoIosAddCircleOutline size={20} />
        </Button>
      </div>

      <div className="flex gap-2 mt-4">
        <Button
          className="text-lg"
          onClick={() => handleCancel()}
          variant={"destructive"}
        >
          មិនកែសម្រួល
        </Button>
        <Button
          className="text-lg"
          onClick={() => handleSave()}
          variant={"secondary"}
        >
          កែសម្រួល
        </Button>
      </div>
    </div>
  );
}
