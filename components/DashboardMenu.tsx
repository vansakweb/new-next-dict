"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

interface Menu {
  title: string;
  path: string;
}
export default function DashboardMenu() {
  const pathname = usePathname();
  const menus: Menu[] = [
    {
      title: "អ្នកប្រើប្រាស់",
      path: "/dashboard/user",
    },
    {
      title: "ពាក្យ",
      path: "/dashboard/word",
    },
    {
      title: "ប្រយោគ",
      path: "/dashboard/sentence",
    },
  ];
  return (
    <div className={`h-full w-full flex justify-between battambang`}>
      <div className="flex gap-2">
        {menus.map((menu) => (
          <Link key={menu.path} href={menu.path}>
            <Button
              variant={pathname.includes(menu.path) ? "default" : "secondary"}
              className={`text-lg`}
            >
              {menu.title}
            </Button>
          </Link>
        ))}
      </div>
      {menus.map(
        (menu) =>
          pathname.includes(menu.path) && (
            <Link key={menu.path} href={`${menu.path}/create`}>
              <Button key={menu.path} variant={"secondary"} className="text-lg">
                {`បន្ថែម`}
                {menu.title}
              </Button>
            </Link>
          )
      )}
    </div>
  );
}
