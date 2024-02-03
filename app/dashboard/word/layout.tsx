import Link from "next/link";

export const metadata = {
  title: "Word",
  description: "中柬词典 | វចនានុក្រមចិនខ្មែរ",
};

export default function WordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
