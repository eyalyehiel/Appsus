import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'
import noteIndex from './apps/keep/pages/note-index.cmp.js'
import mailIndex from './apps/mail/pages/email-app.cmp'

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
		},
		{
			path: '/email',
			component: mailIndex,
		}
	],
}

export const router = createRouter(routerOptions)
