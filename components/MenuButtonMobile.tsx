import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

interface Menu {
  title: string;
  path: string;
}

export function MenuButtonMobile({ menus }: { menus: Menu[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className={`mt-10`}>
            {menus.map((menu) => (
              <SheetTitle key={menu.path} asChild>
                <SheetClose asChild>
                  <Link href={menu.path} className={`w-full py-3`}>
                    <Button
                      variant={"link"}
                      className={`w-full text-xl battambang`}
                    >
                      {menu.title}
                    </Button>
                  </Link>
                </SheetClose>
              </SheetTitle>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
