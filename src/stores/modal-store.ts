import { create } from 'zustand';

interface ModalState {
   isOpen: boolean;
   taskId: number | undefined;
   openModal: () => void;
   closeModal: () => void;
   setTaskId: (id: number | undefined) => void;
}

export const useModalStore = create<ModalState>()((set) => ({
   isOpen: false,
   taskId: undefined,
   openModal: () => set({ isOpen: true }),
   closeModal: () => set({ isOpen: false }),
   setTaskId: (id: number | undefined) => set({ taskId: id }),
}));
