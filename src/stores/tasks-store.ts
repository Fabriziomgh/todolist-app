import { create } from 'zustand';
import {
   addNewTask,
   deleteTask,
   getAllTasksByUserId,
   updateTask,
} from '@/db/requests';
import { Task, TaskStatus } from '@/types';

interface TasksState {
   tasks: Task[] | null;
   loading: boolean;
   getAllTasks: (userId: string | undefined) => Promise<void>;
   addNewTask: (newTask: NewTask) => Promise<void>;
   updateTask: (
      updateTask: NewTask,
      userId: string,
      taskId: number
   ) => Promise<void>;
   deleteTask: (userId: string, taskId: number) => Promise<void>;
}
interface NewTask {
   title: string;
   description: string;
   status: TaskStatus;
   id_user?: string;
}
export const useTasksStore = create<TasksState>()((set, get) => ({
   tasks: [],
   loading: true,
   getAllTasks: async (userId) => {
      try {
         const response = await getAllTasksByUserId(userId);
         set({ tasks: response?.data, loading: false });
      } catch (error) {
         console.log(error);
      }
   },
   addNewTask: async (newTask) => {
      try {
         const data = await addNewTask(newTask);

         if (data?.error || data?.task === undefined) throw new Error('Error!');

         set((state) => ({ tasks: state.tasks?.concat(data?.task) }));
      } catch (error) {
         console.log(error);
      }
   },
   updateTask: async (newTaskUpdate, userId, taskId) => {
      const { tasks } = get();
      try {
         const data = await updateTask(taskId, userId, newTaskUpdate);
         const taskNew = data?.task;
         const tasksUpdated = tasks?.map((task) => {
            if (task.id === taskId) {
               return {
                  ...task,
                  ...taskNew,
               };
            }
            return task;
         });
         set({ tasks: tasksUpdated });
         console.log(tasks);
      } catch (error) {
         console.log(error);
      }
   },
   deleteTask: async (userId, taskId) => {
      const { tasks } = get();
      try {
         const response = await deleteTask(taskId, userId);
         if (response?.status === 204) {
            const newTasks = tasks?.filter((task) => task.id !== taskId);
            if (newTasks === undefined) return;
            set({ tasks: newTasks });
         }
      } catch (error) {
         console.log(error);
      }
   },
}));
