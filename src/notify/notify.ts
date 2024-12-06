import { toast } from 'sonner';

export const notifySuccess = (text: string) => toast.success(text);
export const notifyDeleted = (deletedTask: () => void) =>
   toast('¿Estás seguro de querer eliminar esta tarea?', {
      className: 'text-app-red',
      action: {
         label: 'Aceptar',
         onClick: deletedTask,
      },
      cancel: {
         label: 'Cancelar',
         onClick: () => {},
      },
   });
