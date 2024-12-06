import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
export default async function TasksLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const session = await auth();
   if (!session) redirect('/signin');

   return (
      <>
         <Navbar />
         {children}
         <Footer />
      </>
   );
}
