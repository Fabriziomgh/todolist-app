'use client';

import { signIn } from 'next-auth/react';

export default function SigninButton() {
   return (
      <div className="mt-8 flex flex-wrap justify-center">
         <button
            onClick={() => signIn()}
            className="block hover:scale-105 transition-transform w-full bg-app-orange rounded px-12 py-3 text-white shadow  "
         >
            Empezar
         </button>
      </div>
   );
}
