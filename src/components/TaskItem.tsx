'use client';

import { CheckIcon, ProgressHelpIcon, XIcon } from './Icons';
import { format } from '@formkit/tempo';
import { Task, TaskStatus } from '@/types';
import clsx from 'clsx';
import { useModalStore } from '@/stores/modal-store';

interface Props {
   task: Task;
}

const icons: Record<TaskStatus, JSX.Element> = {
   completed: <CheckIcon />,
   'in-progress': <ProgressHelpIcon />,
   'not-completed': <XIcon />,
};

export default function TaskItem({ task }: Props) {
   const { openModal, setTaskId } = useModalStore((e) => e);
   return (
      <article
         onClick={() => {
            openModal();
            setTaskId(task.id);
         }}
         className={clsx(
            'flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:scale-95 transition-transform ',
            {
               'bg-app-yellow': task.status === 'in-progress',
               'bg-app-lightGreen': task.status === 'completed',
               'bg-app-pink': task.status === 'not-completed',
            }
         )}
      >
         <div className="w-full">
            <div className="flex justify-between items-center">
               <div className="flex gap-x-2 items-center">
                  <div
                     className={clsx('p-1 rounded-xl ', {
                        'bg-app-orange': task.status === 'in-progress',
                        'bg-app-green': task.status === 'completed',
                        'bg-app-red': task.status === 'not-completed',
                     })}
                  >
                     {icons[task.status]}
                  </div>
                  <h2 className="text-xl font-semibold">{task.title}</h2>
               </div>
               <p className="text-xs">
                  {format(task.created_at, { date: 'medium', time: 'short' })}
               </p>
            </div>
            <p className="text-wrap text-sm font-light px-2 mt-4">
               {task.description}
            </p>
         </div>
      </article>
   );
}
