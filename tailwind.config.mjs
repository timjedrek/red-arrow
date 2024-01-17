/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'main-red': '#993333',
      },
      backgroundImage : {
        //'CLASS' : "url('URL-TO-IMAGE')",
      },
      height: theme => ({
        'screen-1/2': '50vh',
        'screen-2/3': '66vh',
        'screen-1/3': 'calc(100vh / 3)',
        'screen-3/4': '75vh',
        'screen-4/5': '80vh',
        'screen-mobile' : '92vh', //depends on menu height
      }),
		},
	},
	plugins: [],
}
