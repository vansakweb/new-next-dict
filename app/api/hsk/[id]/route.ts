import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  const id: number = Number(params.id);
  try {
    const hsk = await prisma.hsk.findUnique({ where: { id } });
    return NextResponse.json(hsk, { status: 200 });
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
  const {
    hsk: hsk_level,
    khmer,
    chinese,
    pinyin,
    english,
  } = await request.json();
  try {
    const hsk = await prisma.hsk.update({
      where: { id },
      data: { hsk: hsk_level, khmer, chinese, pinyin, english },
    });
    return NextResponse.json({ msg: "HSK Updataed", hsk }, { status: 200 });
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
    const hsk = await prisma.hsk.delete({ where: { id } });
    return NextResponse.json({ msg: "HSK Deleted", hsk }, { status: 200 });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
};
