'use client';
import { signOut } from 'next-auth/react';
export default function LogoutButton() {
   return (
      <button
         onClick={() => {
            signOut({ redirectTo: '/signin' });
         }}
         className="  px-4 py-2 text-sm font-medium text-white bg-red-400  rounded-lg shadow-lg "
      >
         Salir
      </button>
   );
}
