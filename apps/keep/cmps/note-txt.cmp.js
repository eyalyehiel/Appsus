export default {
    props: ['info'],
    template:`
    <section>
        <h3>{{ info.txt }}</h3>
        <p>note txt</p>
    </section>
    `,
        created(){
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