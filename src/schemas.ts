import { z } from 'zod';
import { allowedStatusForm } from './consts';

export const newTaskSchema = z.object({
   title: z.string().min(1, { message: 'El título es obligatorio' }),
   description: z.string().min(1, { message: 'La descripción es obligatoria' }),
   status: z.enum(allowedStatusForm, {
      message:
         'El estado es obligatorio y debe ser uno de los siguientes: Completado, No completado, En progreso',
   }),
});
