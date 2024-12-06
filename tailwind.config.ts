import type { Config } from 'tailwindcss';
import tailwindAnimated from 'tailwindcss-animated';
export default {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         colors: {
            app: {
               white: '#F8FAFC',
               yellow: '#F5D565',
               cream: '#F5E8D5',
               orange: '#E9A23B',
               lightGreen: '#A0ECB1',
               green: '#32D657',
               pink: '#F7D4D3',
               red: '#DD524C',
               lightGrey: '#E3E8EF',
               grey: '#97A3B6',
               blue: '#3662E3',
               darkGrey: '#00000033',
            },
            background: 'var(--background)',
            foreground: 'var(--foreground)',
         },
      },
   },
   plugins: [tailwindAnimated],
} satisfies Config;
