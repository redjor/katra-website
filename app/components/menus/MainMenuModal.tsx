'use client'
import {useMainMenuStore} from "@/store/MainMenuStore";
import {useEffect} from "react";

export default function MainMenuModal() {
    const {isOpen} = useMainMenuStore();

    useEffect(() => {
        document.body.classList.toggle('menu-modal-open', isOpen);
    }, [isOpen]); // Run whenever isOpen changes


    return (
        isOpen && (
            <div className="fixed inset-0 z-10 block size-full h-screen bg-black py-4 md:h-screen md:py-16">
                <div className="flex size-full items-end md:items-center">
                </div>
            </div>
        )
    );
}