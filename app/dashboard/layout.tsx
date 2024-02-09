import DashboardMenu from "@/components/DashboardMenu";

export const metadata = {
  title: "Dashboard",
  description: "中柬词典 | វចនានុក្រមចិនខ្មែរ",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen-xl mian py-4 px-2 mx-auto flex-1 flex flex-col">
      <div className={`pb-4`}>
        <DashboardMenu />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
