export default {
    template: `
        <header class="app-header">
            <router-link to="/">
                <h1><img class="img-logo" :src="imgUrl"/>Appsus</h1>
            </router-link>
            <nav>
                <router-link @click="changeLogo('home')" to="/">Home</router-link> | 
                <router-link @click="changeLogo('about')" to="/about">About</router-link> | 
                <router-link @click="changeLogo('email')" to="/email" >Email</router-link> |
                <router-link @click="changeLogo('keep')" to="/keep" >Note</router-link>
            </nav>
        </header>
    `,
    data(){
        return{
            imgUrl: 'assets/img/logos/home.png',
        }
    },
    methods: {
        changeLogo(value){
            switch(value){
                case 'home': this.imgUrl="assets/img/logos/home.png"; break;
                case 'about': this.imgUrl="assets/img/logos/about.png";break;
                case 'email': this.imgUrl="assets/img/logos/mail.png"; break;
                case 'keep': this.imgUrl="assets/img/logos/keep48dp.png";break;
            }
        }
    }
}
