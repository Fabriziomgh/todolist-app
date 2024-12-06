export default function Footer() {
   return (
      <div className="mt-12 border-t border-gray-100 py-6 lg:px-6">
         <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
               <span className="block sm:inline">
                  Todos los derechos reservados.
               </span>
               <a
                  className="inline-block mr-2 text-teal-600 underline transition hover:text-teal-600/75"
                  href="#"
               >
                  Términos & Condiciones
               </a>

               <a
                  className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                  href="#"
               >
                  Politica de privacidad
               </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
               &copy; 2024 Shadow_M
            </p>
         </div>
      </div>
   );
}
