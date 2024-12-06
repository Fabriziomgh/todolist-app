'use client';

import { FormInputNewTask } from '@/types';
import { newTaskSchema } from '@/schemas';
import { notifyDeleted, notifySuccess } from '@/notify/notify';
import { tasksStatusForm } from '@/consts';
import { TrashIcon, CheckIcon } from './Icons';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useModalStore } from '@/stores/modal-store';
import { useTasksStore } from '@/stores/tasks-store';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import ErrorMessage from './ErrorMessage';

interface Props {
   userId: string | undefined;
}

export default function TaskForm({ userId }: Props) {
   const {
      register,
      handleSubmit,
      reset,
      setValue,
      formState: { errors, isSubmitting },
   } = useForm<FormInputNewTask>({
      resolver: zodResolver(newTaskSchema),
   });

   const { tasks, addNewTask, updateTask, deleteTask } = useTasksStore(
      (e) => e
   );
   const { closeModal, setTaskId, taskId } = useModalStore((e) => e);

   const onSubmit: SubmitHandler<FormInputNewTask> = async (data) => {
      try {
         if (taskId !== undefined) {
            await updateTask(data, userId!, taskId);
            notifySuccess('Se ha actualizado la tarea');
            setTaskId(undefined);
         } else {
            await addNewTask({ ...data, id_user: userId! });
            notifySuccess('Se agregó una tarea a la lista');
         }
         reset();
         closeModal();
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      if (taskId === undefined || userId === undefined) return;

      try {
         const getTask = async () => {
            const task = tasks?.find((task) => task.id === taskId);
            if (!task) return;
            setValue('title', task.title ?? '');
            setValue('description', task.description ?? '');
            setValue('status', task.status ?? 'not-completed');
         };
         getTask();
      } catch (error) {
         console.log(error);
      }
   }, [taskId]);

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="mb-6">
            <label className="block text-xs font-medium text-app-grey">
               Título
            </label>

            <input
               {...register('title')}
               type="text"
               placeholder="Cualquier título..."
               className="mt-1 p-2  w-full rounded-md border border-app-grey focus:outline-app-blue sm:text-sm"
            />
            {errors?.title && <ErrorMessage text={errors.title?.message} />}
         </div>
         <div className="mb-4">
            <label className="block text-xs font-medium text-app-grey">
               Descripción
            </label>

            <textarea
               {...register('description')}
               rows={4}
               placeholder="Cualquier título..."
               className="mt-1 p-2 resize-none  w-full rounded-md border border-app-grey focus:outline-app-blue sm:text-sm"
            />
            {errors?.description && (
               <ErrorMessage text={errors.description?.message} />
            )}
         </div>
         <div className="mb-4">
            <label className="block text-xs font-medium text-app-grey">
               Estado
            </label>

            <select
               {...register('status')}
               className="mt-1 p-2 resize-none  w-full rounded-md border border-app-grey focus:outline-app-blue sm:text-sm"
            >
               <option value="">Seleccionar...</option>
               {tasksStatusForm.map((opt) => (
                  <option key={opt.id} value={opt.value}>
                     {opt.label}
                  </option>
               ))}
            </select>
            {errors?.status && <ErrorMessage text={errors.status?.message} />}
         </div>
         <div className="flex justify-center gap-x-6 mt-10 py-4 ">
            {taskId && (
               <div className="flex text-white font-semibold items-center gap-x-2 bg-app-grey px-2 py-1 rounded shadow hover:scale-105 transition-transform ease-in">
                  <button
                     onClick={() => {
                        notifyDeleted(async () => {
                           await deleteTask(userId!, taskId);
                           notifySuccess(
                              'La tarea se ha eliminado de la lista'
                           );
                           closeModal();
                           setTaskId(undefined);
                        });
                     }}
                     type="button"
                     className=""
                  >
                     Eliminar
                  </button>
                  <TrashIcon />
               </div>
            )}
            <div
               className={clsx(
                  'flex text-white font-semibold items-center gap-x-2 bg-app-blue px-2 py-1 rounded shadow hover:scale-105 transition-transform ease-in',
                  {
                     'bg-app-grey': isSubmitting,
                  }
               )}
            >
               <button disabled={isSubmitting} className="">
                  {isSubmitting ? 'Cargando...' : 'Guardar'}
               </button>
               <CheckIcon />
            </div>
         </div>
      </form>
   );
}
