export const metadata = {
  title: "Stroke",
  description: "中柬词典 | វចនានុក្រមចិនខ្មែរ",
};

export default function StrokeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen-xl mian py-4 px-2 mx-auto">{children}</div>
  );
}
