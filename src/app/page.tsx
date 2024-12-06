import SigninButton from '@/components/SigninButton';

export default function Home() {
   return (
      <main>
         <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
               <h1 className="text-3xl  font-extrabold sm:text-5xl">
                  Domina tu día a día
                  <strong className="font-extrabold text-app-grey block">
                     Tareas listas, mente tranquila
                  </strong>
               </h1>

               <p className="mt-4 sm:text-xl/relaxed">
                  ¡Organiza tu día a día de forma sencilla e intuitiva! Crea
                  listas personalizadas, establece recordatorios y marca tus
                  logros
               </p>

               <SigninButton />
            </div>
         </div>
      </main>
   );
}
