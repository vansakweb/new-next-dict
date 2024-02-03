import Link from "next/link";

export const metadata = {
  title: "Sentence",
  description: "中柬词典 | វចនានុក្រមចិនខ្មែរ",
};

export default function SentenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
