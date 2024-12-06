'use client';
import { PlusIcon } from './Icons';
import { useModalStore } from '@/stores/modal-store';
export default function OpenButtonForm() {
   const openModal = useModalStore((s) => s.openModal);
   return (
      <button
         aria-label="openForm"
         onClick={openModal}
         className="bg-app-cream  p-2 rounded-lg font-semibold hover:scale-90 transition-transform"
      >
         <div className="p-1 rounded-lg bg-app-orange">
            <PlusIcon />
         </div>
      </button>
   );
}
