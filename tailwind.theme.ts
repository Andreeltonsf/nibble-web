import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";



export const extendTheme = {

  fontFamily: {
    ...defaultTheme.fontFamily,
    'sans': ['var(--font-open-sans)', ...defaultTheme.fontFamily.sans],
  },



  colors: {
    "primary": "hsl(251,43%,43%,1)",
    "primary-light": "hsl(251,43%,43%,0.1)",
    'secondary':'hsl(16,96%,61%,1)',
    'secondary-light':'hsl(16,96%,61%,0.1)',
    'tertiary':'hsl(43,94%,67%,1)',
    'tertiary-light':'hsl(43,94%,67%,0.1)',
    'success':'hsl(118,43%,43%,1)',
    'success-light':'hsl(118,43%,43%,0.1)',
    'error':'hsl(0,100%,50%,1)',
    'error-light':'hsl(0,100%,50%,0.16)',
    'dark':'hsl(0,0%,0%,1)',
    'dark-light':'hsl(0,0%,0%,0.16)',
    'dark-secondary':'hsl(0,0%,18%,1)',
    'grey':'hsl(240,1%,64%,1)',
    'grey-medium':'hsl(240,1%,64%,0.32)',
    'grey-light':'hsl(240,1%,64%,0.16)',
    'grey-lighter':'hsl(0,0%,97%,0.08)',
    'light':'hsl(0,0%,100%,1)',
    'typography':{
      'dark':'hsl(228,38%,15%,1)',
      'secondary':'hsl(240,1%,39%,1)',
      'light':'hsl(240,45%,98%,1)',
      'lighter':'hsl(244,100%,97%,1)',
    },
    ...defaultTheme.colors, 
  },
} satisfies Config["theme"];
