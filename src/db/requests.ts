'use server';
import { TaskStatus, Task } from '@/types';
import { createClient } from '@/utils/supabase/server';
import { PostgrestError } from '@supabase/supabase-js';

export const getAllTasksByUserId = async (id: string | undefined) => {
   try {
      const supabase = await createClient();
      const tasks = await supabase.from('tasks').select('*').eq('id_user', id);
      return tasks;
   } catch (error) {
      console.log(error);
   }
};

interface NewTask {
   title: string;
   description: string;
   status: TaskStatus;
}

interface ResponseTask {
   data: Task[] | null;
   error: PostgrestError | null;
}

export const addNewTask = async (
   newTask: NewTask
): Promise<{ task: Task; error: PostgrestError | null } | undefined> => {
   try {
      const supabase = await createClient();
      const { data, error }: ResponseTask = await supabase
         .from('tasks')
         .insert(newTask)
         .select();

      if (data === null) return;
      const task = data[0];
      return { task, error };
   } catch (error) {
      console.log(error);
   }
};

export const getTaskById = async (
   taskId: number,
   userId: string
): Promise<{ task: Task; error: PostgrestError | null } | undefined> => {
   try {
      const supabase = await createClient();
      const { data, error } = await supabase
         .from('tasks')
         .select('*')
         .eq('id', taskId)
         .eq('id_user', userId);
      if (data === null) return;
      const task = data[0];
      return { task, error };
   } catch (error) {
      console.log(error);
   }
};

export const updateTask = async (
   taskId: number,
   userId: string,
   taskUpdate: Partial<Task>
): Promise<{ task: Task; error: PostgrestError | null } | undefined> => {
   try {
      const supabase = await createClient();
      const { data, error } = await supabase
         .from('tasks')
         .update(taskUpdate)
         .eq('id', taskId)
         .eq('id_user', userId)
         .select();
      if (data === null) return;
      const task = data[0];
      return { task, error };
   } catch (error) {
      console.log(error);
   }
};

export const deleteTask = async (taskId: number, userId: string) => {
   try {
      const supabase = await createClient();
      const response = await supabase
         .from('tasks')
         .delete()
         .eq('id', taskId)
         .eq('id_user', userId);
      return response;
   } catch (error) {
      console.log(error);
   }
};
