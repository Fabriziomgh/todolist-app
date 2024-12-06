'use client';

import { Google, Github } from './Icons';

import { signIn } from 'next-auth/react';

export default function SigninButtonsGroup() {
   return (
      <div className="mb-0 mt-2 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
         <button
            onClick={() => {
               signIn('google', { redirectTo: '/tasks' });
            }}
            className="flex shadow gap-x-2 items-center w-full rounded-lg bg-slate-100  px-5 py-3  font-medium "
         >
            <div>
               <Google className="text-2xl" />
            </div>
            Iniciar sesión con Google
         </button>

         <button
            onClick={() => {
               signIn('github', { redirectTo: '/tasks' });
            }}
            className="flex shadow gap-x-2 items-center w-full rounded-lg bg-[#24292F] px-5 py-3  font-medium text-white"
         >
            <div>
               <Github className="text-2xl" />
            </div>
            Iniciar sesión con GitHub
         </button>
      </div>
   );
}
