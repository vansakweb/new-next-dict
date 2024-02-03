import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";
import sentences from "@/lib/sentence1446.json";

// POST SINGLE DATA
// export const POST = async (request: NextRequest) => {
//   const { khmer, segment } = await request.json();
//   const pinyin = segment.map((segm: any) => segm.pinyin);
//   const chinese = segment.map((segm: any) => segm.chinese);
//   try {
//     const sentence = await prisma.sentence.create({
//       data: { khmer, pinyin, chinese, segment },
//     });
//     return NextResponse.json(
//       { msg: "Sentence Ceeated", sentence },
//       { status: 200 }
//     );
//   } catch (error) {
//     // console.log(error);
//     return NextResponse.json({ msg: "error" }, { status: 500 });
//   }
// };

export async function GET(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const search: string | undefined = searchParams.get("search") || undefined;
  // const skip: number | undefined = Number(searchParams.get("skip")) || 0;
  // const take: number | undefined = Number(searchParams.get("take")) || 0;

  try {
    const count = await prisma.sentence.count();
    const sentence = await prisma.sentence.findMany({
      where: {
        chinese: { hasEvery: [] },
      },
      select: {
        id: true,
        khmer: true,
        segment: true,
        // chinese: true,
      },
      orderBy: { segment: "asc" },
      // take: 2,
      // skip: 0,
    });
    const curent_count = sentence.length;
    return NextResponse.json(
      { count, curent_count, sentence },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}

// POST MULTIPLE DATA
// export async function POST(request: Request) {
//   try {
//     const sentence = await prisma.sentence.createMany({
//       data: sentences,
//     });
//     console.log(sentence);
//   } catch (error) {
//     console.log(error);
//   }

//   console.log("Sentences Saved");
//   return NextResponse.json("Sentences Saved", { status: 200 });
// }
