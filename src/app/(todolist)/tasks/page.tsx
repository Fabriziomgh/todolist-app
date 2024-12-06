import { auth } from '@/auth';
import AddNewTask from '@/components/AddNewTask';
import HeaderTasks from '@/components/HeaderTasks';
import TasksGrid from '@/components/TasksGrid';

export default async function TasksPage() {
   const session = await auth();
   const id = session?.user?.id;

   return (
      <>
         <AddNewTask userId={id} />
         <section className="py-8 px-2 lg:max-w-lg lg:mx-auto">
            <HeaderTasks />
            <TasksGrid userId={id} />
         </section>
      </>
   );
}
