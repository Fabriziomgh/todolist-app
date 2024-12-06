import SigninButtonsGroup from '@/components/SigninButtonsGroup';

import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function SignInPage() {
   const session = await auth();

   if (session) redirect('/tasks');

   return (
      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
         <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold  sm:text-3xl">
               ¡Aquí vamos!
            </h1>

            <SigninButtonsGroup />
         </div>
      </section>
   );
}
