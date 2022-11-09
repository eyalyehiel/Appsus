import bookPreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template:`
     <section class="note-list">
        
        <book-preview @duplicate-note="duplicateNote" @pin-note="pinNote" @update-note="changeBgColor" @delete-note="deleteNote" :note="note" v-for="note in notes" :key="note.id"/>
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
        },
        pinNote(noteId){
            this.$emit('pin-note',noteId)
        },
        duplicateNote(duplicated){
            this.$emit('duplicate-note', duplicated)
        }
    },
    computed: {

    },
    components: {
        bookPreview
    }
}