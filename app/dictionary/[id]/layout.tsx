import { hsk } from "@/lib/data";
import type { Metadata, ResolvingMetadata } from "next";
import { Fragment } from "react";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const word: Hsk = await hsk.one(Number(params.id));
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${word?.chinese} ${word?.chinese && "|"} ${word?.pinyin[0]} ${
      word?.pinyin[0] && "|"
    } ${word?.khmer[0]} ${word?.khmer[0] && "|"} ${word?.english[0]}`,
    // description: `${word?.chinese}:${word?.pinyin} \n ${word?.khmer} \n ${word?.english} `,
    openGraph: {
      images: [
        "https://new-next-dict.vercel.app/favicon.png",
        ...previousImages,
      ],
    },
  };
}

export default async function DictionaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Fragment>{children}</Fragment>;
}
