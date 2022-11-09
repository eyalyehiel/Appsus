export default {
    template: `
        <header class="app-header">
            <h1><img class="img-logo" :src="imgUrl"/>Appsus</h1>
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
            imgUrl: '',
        }
    },
    methods: {
        changeLogo(value){
            switch(value){
                case 'home': this.imgUrl="assets/img/home.png"; break;
                case 'about': this.imgUrl="assets/img/mail.png";break;
                case 'email': this.imgUrl="assets/img/mail.png"; break;
                case 'keep': this.imgUrl="assets/img/icons/keep48dp.png";break;
            }
        }
    }
}
