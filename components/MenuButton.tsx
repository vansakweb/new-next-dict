"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Menu {
  title: string;
  path: string;
}
export default function MenuButton({ menus }: { menus: Menu[] }) {
  const pathname = usePathname();

  return (
    <div className={`space-x-2`}>
      {menus.map((menu) => (
        <Link key={menu.path} href={menu.path} className={``}>
          <Button
            className={`text-lg battambang`}
            variant={pathname.includes(menu.path) ? "default" : "secondary"}
          >
            {menu.title}
          </Button>
        </Link>
      ))}
    </div>
  );
}
