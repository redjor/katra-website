import {create} from 'zustand'

interface MainMenuStore {
    isOpen: boolean
    toggle: () => void
}

export const useMainMenuStore = create<MainMenuStore>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({isOpen: !state.isOpen})),
}))