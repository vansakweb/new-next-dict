import Link from "next/link";

export const metadata = {
  title: "User",
  description: "中柬词典 | វចនានុក្រមចិនខ្មែរ",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
