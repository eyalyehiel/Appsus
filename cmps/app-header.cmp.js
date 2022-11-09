export default {
    template: `
        <header class="app-header">
            <h1>Appsus</h1>
            <nav>
                <router-link to="/">Home</router-link> | 
                <router-link to="/about">About</router-link> | 
                <router-link to="/email" >Email</router-link> |
                <router-link to="/keep" >Note</router-link>
            </nav>
        </header>
    `,
}
