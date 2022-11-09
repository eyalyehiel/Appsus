export default {
    props: ['info'],
    template:`
    <section class="note-info">
        <h3>{{ info.txt }}</h3>
    </section>
    `,
        created(){
            console.log('created txt note');
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