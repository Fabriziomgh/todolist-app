import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';
import { SupabaseAdapter } from '@auth/supabase-adapter';

const url = process.env.SUPABASE_URL ?? '';
const secret = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';

export const { handlers, signIn, signOut, auth } = NextAuth({
   providers: [Google, GitHub],
   adapter: SupabaseAdapter({
      url,
      secret,
   }),
   pages: {
      signIn: '/signin',
   },
});
