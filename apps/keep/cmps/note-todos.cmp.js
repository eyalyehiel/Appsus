export default {
    props: ['info'],
    template: `
    <section class="note-info">
        <h3>{{ info.label }}</h3>
        <p>note tofo</p>

    </section>
    `,
    created() {
        console.log('created todo note');
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