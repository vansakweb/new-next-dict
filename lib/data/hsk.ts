import prisma from "@/prisma/client";

const createHsk = async (data: any) => {
  try {
    const hsk = await prisma.hsk.create({
      data: { ...data },
    });
    return { msg: "HSK Created!", hsk };
  } catch (error) {
    console.log(error);
  }
};

const getHsks = async (skip: number | undefined, take: number | undefined) => {
  try {
    const count = await prisma.hsk.count();
    const hsks = await prisma.hsk.findMany({
      orderBy: { chinese: "asc" },
      skip: skip && skip - 1,
      take: take,
    });
    return { count, hsks };
  } catch (error) {
    console.log(error);
  }
};

const getHskOnlyChinese = async () => {
  try {
    const count = await prisma.hsk.count();
    const hsks = await prisma.hsk.findMany({
      select: { id: true, chinese: true },
      orderBy: { chinese: "asc" },
    });
    return { count, hsks };
  } catch (error) {
    console.log(error);
  }
};

const getHskById = async (id: number) => {
  try {
    const hsk = await prisma.hsk.findUnique({
      where: { id },
    });
    return hsk;
  } catch (error) {
    console.log(error);
  }
};

const updateHskById = async (id: number, data: any) => {
  try {
    const hsk = await prisma.hsk.update({
      where: { id },
      data: { ...data },
    });
    return { msg: "HSK Updated!", hsk };
  } catch (error) {
    console.log(error);
  }
};

const deleteHskById = async (id: number) => {
  try {
    const hsk = await prisma.hsk.delete({
      where: { id },
    });
    return { msg: "HSK Deleted!", hsk };
  } catch (error) {
    console.log(error);
  }
};

const hsk = {
  create: createHsk,
  all: getHsks,
  all_only_ch: getHskOnlyChinese,
  one: getHskById,
  update: updateHskById,
  delete: deleteHskById,
};

export { hsk };
