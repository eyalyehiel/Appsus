export default {
    props: ['info'],
    template: `
    <section v-html="info.url" class="note-info">
        
    </section>
    `,
    created() {
        console.log('test');
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