import { IoIosArrowBack } from "react-icons/io";
import { Button } from "../ui/button";
import { SetStateAction } from "react";

export default function BackBtn({
  setShow,
}: {
  setShow: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Button size={"icon"} variant={"ghost"} onClick={() => setShow(false)}>
      <IoIosArrowBack size={20} />
    </Button>
  );
}
