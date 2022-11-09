import bookPreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template:`
     <section class="note-list">
        <book-preview @update-note="changeBgColor" @delete-note="deleteNote" :note="note" v-for="note in notes" :key="note.id"/>
     </section>
    `,
    created(){
    },
    data(){
        return{

        }
    },
    methods: {
        deleteNote(noteId){
            this.$emit('deleteNote', noteId)
        },
        changeBgColor(note){
            this.$emit('update-note',note)
        }
    },
    computed: {

    },
    components: {
        bookPreview
    }
}