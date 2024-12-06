'use client';

import { XIcon } from './Icons';
import { useModalStore } from '@/stores/modal-store';
import TaskForm from './TaskForm';

interface Props {
   userId: string | undefined;
}

export default function AddNewTask({ userId }: Props) {
   const { isOpen, closeModal, setTaskId } = useModalStore((s) => s);
   return (
      <>
         {isOpen && (
            <div className="fixed animate-fade-left animate-duration-300 animate-ease-out p-4 right-0 top-0 bg-white w-full md:w-[500px] h-screen  rounded-lg z-20 shadow">
               <div className="flex justify-between items-center mb-10">
                  <h3>Detalles de la tarea</h3>
                  <div
                     onClick={() => {
                        closeModal();
                        setTaskId(undefined);
                     }}
                     className="p-1 cursor-pointer rounded shadow bg-app-pink"
                  >
                     <XIcon />
                  </div>
               </div>
               <div>
                  <TaskForm userId={userId} />
               </div>
            </div>
         )}
      </>
   );
}
