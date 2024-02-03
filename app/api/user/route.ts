import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

// interface User {
//   id: Number;
//   email: string;
//   name: string;
//   posts: [];
// }
export async function GET(request: Request) {
  const user = await prisma.user.findMany();

  return NextResponse.json(user, { status: 200 });
}

// export async function POST(request: Request) {
//   const user = await prisma.user.create({
//     data: {
//       email: "rongli@zhang.com",
//       name: "Zhang Rongli",
//     },
//   });

//   return NextResponse.json(user, { status: 201 });
// }
