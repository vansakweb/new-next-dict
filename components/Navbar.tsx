import ProfileButton from "@/components/ProfileButton";
import { ModeToggle } from "@/components/ThemeButton";
import MenuButton from "@/components/MenuButton";
import { MenuButtonMobile } from "@/components/MenuButtonMobile";

const menus = [
  {
    title: "វច្ចុនានុក្រម",
    path: "/dictionary",
  },
  {
    title: "ឯកសាផ្សេងៗ",
    path: "/document",
  },
  {
    title: "គំនូសអក្សរ",
    path: "/stroke",
  },
  {
    title: "បំលែងអក្សរ",
    path: "/converter",
  },
  {
    title: "ផ្ទាំងគ្រប់គ្រង",
    path: "/dashboard",
  },
  {
    title: "អំពីវេបសាយ",
    path: "/about",
  },
];

export default function Navbar() {
  return (
    <div className={`sticky z-50 top-0 bg-slate-300 dark:bg-slate-700`}>
      <div
        className={`max-w-screen-xl h-16 px-2 flex justify-between items-center mx-auto`}
      >
        <p className={`text-lg guoyu`}>{"中柬词典"}</p>
        <div className={`hidden md:flex gap-3`}>
          <div className="hidden lg:block">
            <ModeToggle />
          </div>
          <MenuButton menus={menus} />
        </div>
        <div className={`hidden lg:block pinyin`}>
          <ProfileButton />
        </div>
        <div className={`md:hidden`}>
          <MenuButtonMobile menus={menus} />
        </div>
      </div>
    </div>
  );
}
