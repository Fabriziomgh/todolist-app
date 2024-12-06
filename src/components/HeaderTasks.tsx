import { CheckListIcon } from './Icons';
import OpenButtonForm from './OpenButtonForm';

export default function HeaderTasks() {
   return (
      <div className="flex  justify-between">
         <div className="flex items-center gap-x-1 mb-4">
            <span className="text-app-orange self-start">
               <CheckListIcon />
            </span>
            <h1 className="font-normal text-3xl">
               Mi lista de tareas
               <p className="font-light text-base mt-2">Mantente organizado</p>
            </h1>
         </div>
         <div>
            <OpenButtonForm />
         </div>
      </div>
   );
}
