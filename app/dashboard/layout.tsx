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
    <div className="h-full flex flex-col flex-1 px-1 sm:px-2 xl:px-4 2xl:px-16 transition-all">
      <div className={`py-4`}>
        <DashboardMenu />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
