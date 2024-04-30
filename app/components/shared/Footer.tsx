import MainMenu from "@/app/components/shared/MainMenu";

export default function Footer() {
    return (
        <footer
            className="relative flex h-screen w-full flex-col gap-4 bg-black py-4 md:gap-0 md:py-12"
        >
            <div className="z-0 flex w-full grow justify-center">
                <MainMenu/>
            </div>
            <div
                className="z-[1] mt-4 flex flex-col items-center justify-between space-y-4 px-5 md:mt-0 md:flex-row md:space-y-0 md:px-16"
            >
                <div className="text-center text-sm text-white md:text-left">
                    ©2022 <b>Studio Katra</b> - Tous droits réservés - <b>Mentions Légales</b>
                </div>
            </div>
        </footer>
    )
}