import { create } from "zustand"

interface AuthModalProp {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useAuthModal =  create<AuthModalProp>((set)=>({
    isOpen:false,
    onOpen: ()=> set({ isOpen:true }),
    onClose: ()=> set({ isOpen:false })
}))

export default useAuthModal;