import { auth } from '@/auth';
import LogoutButton from './LogoutButton';
import Image from 'next/image';

export default async function Navbar() {
   const session = await auth();

   return (
      <header>
         <div className=" ">
            <div className="flex items-center justify-between gap-2 p-4 ">
               <div className="flex gap-x-2">
                  <Image
                     alt={session?.user?.name ?? ''}
                     src={session?.user?.image ?? ''}
                     className="size-10 rounded-full object-cover"
                     height={40}
                     width={40}
                  />
                  <p className="text-xs">
                     <strong className="block font-medium">
                        {session?.user?.name}
                     </strong>

                     <span> {session?.user?.email} </span>
                  </p>
               </div>
               <LogoutButton />
            </div>
         </div>
      </header>
   );
}
