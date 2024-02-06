// import { convert } from "@/lib/data/convert";
"use client";

import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { ShowContext } from "@/contexts/Show";

export default function Test() {
  //   convert();
  const { show, setShow } = useContext(ShowContext);
  // console.log(show);

  return (
    <div>
      {JSON.stringify(show)}
      <Button onClick={() => setShow((prev) => !prev)}>Change</Button>
    </div>
  );
}
