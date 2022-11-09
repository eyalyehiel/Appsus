export default {
    props: ['info'],
    template:`
    <section class="note-info">
        <h3>{{ info.txt }}</h3>
        <p>note vid</p>

    </section>
    `,        created(){
            console.log('created video note');
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