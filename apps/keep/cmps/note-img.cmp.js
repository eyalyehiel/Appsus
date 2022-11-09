export default {
    props: ['info'],
    template: `
    <section class="note-info">
        <h3>{{ info.title }}</h3>
        <img :src="info.url" alt="" />

    </section>
    `,
    created() {
        console.log('created video note');
    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    },
}