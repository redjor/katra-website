'use client'
import Image from "next/image";
import {useMainMenuStore} from '@/store/MainMenuStore'

export default function Header() {
    const {isOpen, toggle} = useMainMenuStore()
    const iconSrc = isOpen ? 'assets/img/menu-nav-close.svg' : 'assets/img/menu-nav-default.svg';

    const handleClick = () => {
        toggle()
    }

    return (
        <header className="pointer-events-none fixed inset-x-0 top-0 z-50 w-full py-6 md:py-[44px]">
            <div className="flex w-full justify-between px-5 md:px-16">
                <Image src='assets/img/logo.svg' alt="Logo Katra" width="69" height="38"/>
                <div className="pointer-events-auto flex items-center space-x-6">
                    <Image className="cursor-pointer" src={iconSrc} alt="Menu Icon" width="25" height="25"
                           onClick={handleClick}/>
                </div>
            </div>
        </header>
    )
}