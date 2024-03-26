import { create } from "zustand"

interface UploadModalProp {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useUploadModal =  create<UploadModalProp>((set)=>({
    isOpen:false,
    onOpen: ()=> set({ isOpen:true }),
    onClose: ()=> set({ isOpen:false })
}))

export default useUploadModal;