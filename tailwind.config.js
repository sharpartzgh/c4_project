/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Roboto": ['Roboto']
    },
     screens: {

      'sm': {'min': '234px', 'max': '640px'},
      //  => @media (min-width: 234px) and (max-width: 640px) 

      'tablet': '640px',
      // => @media (min-width: 640px) 

      'laptop': '1024px',
      // => @media (min-width: 1024px) 

      'desktop': '1280px',
      // => @media (min-width: 1280px) 

    },
    extend: {
      backgroundImage: {
        "hero": "url(src/assets/images/illustration-working.svg)"
      }
    },
  },
  plugins: [],
}

