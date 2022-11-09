import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'
import noteIndex from './views/app-about.cmp.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: homePage,
		},
		{
			path: '/about',
			component: aboutPage,
		},
		{
			path: '/keep',
			component: noteIndex,
		}
		{
			path: '/mail',
			component: mailIndex,
		}
	],
}

export const router = createRouter(routerOptions)
