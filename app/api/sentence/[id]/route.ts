import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  const id: number = Number(params.id);
  try {
    const sentence = await prisma.sentence.findUnique({ where: { id } });
    return NextResponse.json(sentence, { status: 200 });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
};

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  const id: number = Number(params.id);
  const { khmer, segment } = await request.json();
  const pinyin = segment.map((segm: any) => segm.pinyin);
  const chinese = segment.map((segm: any) => segm.chinese);
  try {
    const sentence = await prisma.sentence.update({
      where: { id },
      data: { khmer, pinyin, chinese, segment },
    });
    return NextResponse.json(
      { msg: "Sentence Updated", sentence },
      { status: 200 }
    );
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  const id: number = Number(params.id);
  try {
    const sentence = await prisma.sentence.delete({ where: { id } });
    return NextResponse.json(
      { msg: "Sentence Deleted", sentence },
      { status: 200 }
    );
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
};
