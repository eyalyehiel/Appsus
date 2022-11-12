const { createApp } = Vue


import { router } from './routes.js'

import appHeader from './cmps/app-header.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'
import  appBackground  from "../views/app-backgrounds-cmp.js";

const options = {
	template: `
        <section>
            <app-header />
            <router-view />
            <user-msg />
            <app-backgrounds :class="{open: isOpen}"/>
        </section>
    `,
	components: {
		appHeader,
		userMsg,
        appBackground
	},
}

const app = createApp(options)
app.use(router)
app.mount('#app')
