'use client';
import { useTasksStore } from '@/stores/tasks-store';
import { useEffect } from 'react';
import TaskItem from './TaskItem';
import Spinner from './Spinner';
import { Task } from '@/types';

interface Props {
   tasks: Task[] | undefined;
}

export default function TasksGrid({ tasks: tasksUser }: Props) {
   const { loading, tasks, getAllTasks } = useTasksStore((e) => e);

   useEffect(() => {
      if (tasksUser === undefined) return;
      getAllTasks(tasksUser);
   }, []);

   if (tasks === null) return <div>Error</div>;

   return (
      <div className="py-6 space-y-4">
         {!loading && tasks.length === 0 && (
            <div className="text-center text-lg py-2">
               No tienes tareas actualmente
            </div>
         )}
         {!loading &&
            tasks.length > 0 &&
            tasks.map((task) => <TaskItem key={task.id} task={task} />)}
         {loading && <Spinner />}
      </div>
   );
}
