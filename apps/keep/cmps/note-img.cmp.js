export default {
    props: ['info'],
    template:`
    <section>
        <h3>{{ info.title }}</h3>
        <p>note img</p>

    </section>
    `,        created(){
            console.log(this.info);
        },
    data(){
        return{

        }
    },
    methods: {

    },
    computed: {

    },
}