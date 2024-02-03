import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";
// import all_hsks from "@/lib/data/convert.json";

// export const POST = async (request: NextRequest) => {
//   const {
//     hsk: hsk_level,
//     khmer,
//     chinese,
//     pinyin,
//     english,
//   } = await request.json();
//   try {
//     const hsk = await prisma.hsk.create({
//       data: { hsk: hsk_level, khmer, chinese, pinyin, english },
//     });
//     return NextResponse.json({ msg: "HSK Created", hsk }, { status: 201 });
//   } catch (error) {
//     // console.log(error);
//     return NextResponse.json({ msg: "error" }, { status: 500 });
//   }
// };

export async function GET(request: Request) {
  try {
    const count = await prisma.hsk.count();
    const hsk = await prisma.hsk.findMany();
    return NextResponse.json({ count, hsk }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

// POST MULTIPLE DATA
// export async function POST(request: Request) {
//   try {
//     const hsks = await prisma.hsk.createMany({
//       data: all_hsks,
//     });
//     console.log(hsks);
//   } catch (error) {
//     console.log(error);
//   }

//   console.log("HSK Saved");
//   return NextResponse.json("HSK Saved", { status: 200 });
// }
