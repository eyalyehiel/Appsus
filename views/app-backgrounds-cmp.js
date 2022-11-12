export default {
    components: {
        
    },
    template:`
    
    <section class="backgrounds">
            <div class="bcg1" @click="updateBcg('./assets/img/backgrounds/1.jpg')"><img src="./assets/img/backgrounds/1.jpg" alt=""></div>
            <div class="bcg1"><img src="./assets/img/backgrounds/2.jpg" alt=""></div>
            <div class="bcg1"><img src="./assets/img/backgrounds/3.jpg" alt=""></div>
            <div class="bcg1"><img src="./assets/img/backgrounds/4.jpg" alt=""></div>
           
        </section>
    `,
    data(){
        return{
            isActive: ''
        }
    },
    methods: {
        updateBcg(val){
            this.isActive = val
            this.$emit('update-backgrounds',val)
        }
    },
    computed: {

    },
}