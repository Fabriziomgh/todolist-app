import { TaskStatusForm } from '@/types';

export const tasksStatusForm: TaskStatusForm[] = [
   {
      id: '1',
      label: 'Completada',
      value: 'completed',
   },
   {
      id: '2',
      label: 'No completada',
      value: 'not-completed',
   },
   {
      id: '3',
      label: 'En progreso',
      value: 'in-progress',
   },
];

export const allowedStatusForm = [
   'completed',
   'not-completed',
   'in-progress',
] as const;
