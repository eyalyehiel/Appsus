export default {
    props: ['info'],
    template: `
    <section>
        <h3>{{ info.label }}</h3>
        <p>note tofo</p>

    </section>
    `,
    created() {
        console.log(this.info);
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