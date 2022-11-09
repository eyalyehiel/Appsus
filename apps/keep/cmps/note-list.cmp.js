import bookPreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template:`
     <section class="note-list">
        <book-preview :note="note" v-for="note in notes" :key="note.id"/>
     </section>
    `,
    created(){
    },
    data(){
        return{

        }
    },
    methods: {

    },
    computed: {

    },
    components: {
        bookPreview
    }
}