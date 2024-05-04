import MainMenuLinks from "@/app/components/menus/MainMenuLinks";
import SocialLinks from "@/app/components/menus/SocialLinks";
import MenuBackground from "@/app/components/menus/MenuBackground";

export default function MainMenu() {
  return (
    <div className="w-full bg-black">
      <div className="relative z-10 flex size-full flex-col md:justify-between">
        <div className="flex h-full flex-col items-start justify-end gap-12 md:flex-row md:items-center md:justify-between">
          <MainMenuLinks />
          <SocialLinks />
        </div>
      </div>
      <MenuBackground />
    </div>
  );
}
