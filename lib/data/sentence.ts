import prisma from "@/prisma/client";

const createSentence = async (data: any) => {
  try {
    const sentence = await prisma.sentence.create({
      data: { ...data },
    });
    return { msg: "Sentence Created!", sentence };
  } catch (error) {
    console.log(error);
  }
};

const getSentences = async (
  skip: number | undefined,
  take: number | undefined
) => {
  try {
    const count = await prisma.sentence.count();
    const sentences = await prisma.sentence.findMany({
      orderBy: { chinese: "asc" },
      skip: skip && skip - 1,
      take: take,
    });

    return { count, sentences };
  } catch (error) {
    console.log(error);
  }
};

const getSentenceById = async (id: number) => {
  try {
    const sentence = await prisma.sentence.findUnique({
      where: { id },
    });
    return sentence;
  } catch (error) {
    console.log(error);
  }
};

const searchSentences = async (search: string) => {
  try {
    const sentences = await prisma.sentence.findMany({
      where: {
        chinese: { hasEvery: [search] },
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
    return sentences;
  } catch (error) {
    console.log(error);
  }
};

const updateSentenceById = async (id: number, data: any) => {
  try {
    const sentence = await prisma.sentence.update({
      where: { id },
      data: { ...data },
    });
    return { msg: "Sentence Updated!", sentence };
  } catch (error) {
    console.log(error);
  }
};

const deleteSentenceById = async (id: number) => {
  try {
    const sentence = await prisma.sentence.delete({
      where: { id },
    });
    return { msg: "Sentence Deleted!", sentence };
  } catch (error) {
    console.log(error);
  }
};

const sentence = {
  create: createSentence,
  all: getSentences,
  one: getSentenceById,
  search: searchSentences,
  update: updateSentenceById,
  delete: deleteSentenceById,
};
export { sentence };
