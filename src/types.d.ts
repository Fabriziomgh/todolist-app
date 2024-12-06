import { PostgrestError } from '@supabase/supabase-js';

export interface SupabaseResponse {
   error: PostgrestError | null;
   data: Task[] | null;
   count: number | null;
   status: number;
   statusText: string;
}

export interface Task {
   id: number;
   created_at: Date;
   title: string;
   description: string;
   status: TaskStatus;
   id_user: string;
}
type TaskStatus = 'completed' | 'in-progress' | 'not-completed';
export interface FormInputNewTask {
   title: string;
   description: string;
   status: TaskStatus;
}

interface TaskStatusForm {
   id: string;
   label: string;
   value: TaskStatus;
}
