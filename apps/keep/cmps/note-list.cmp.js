import bookPreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template:`
     <section class="note-list">
         <section v-if="!pinIsEmpty" class="pin-notes">
             <h3  class="title">Pinned</h3>
             <book-preview @duplicate-note="duplicateNote" @pin-note="pinNote" @update-note="changeBgColor" @delete-note="deleteNote" :note="note" v-for="note in pinNotes" :key="note.id"/>
            </section>
            <section  class="un-pin-notes">
            <h3 v-if="!unPinIsEmpty" class="title">unPinned</h3>
            <book-preview @duplicate-note="duplicateNote" @pin-note="pinNote" @update-note="changeBgColor" @delete-note="deleteNote" :note="note" v-for="note in unPinNotes" :key="note.id"/>
        </section>
     </section> 
    `,
    created(){
        // this.pinnedNotes = this.notes.filter(note => note.isPinned)
        // this.unPinnedNotes = this.notes.filter(note => !note.isPinned)
    },
    data(){
        return{
            pinIsEmpty: false,
            unPinIsEmpty: false,
        }
    },
    methods: {
        deleteNote(noteId){
            this.$emit('deleteNote', noteId)
        },
        changeBgColor(note){
            this.$emit('update-note',note)
        },
        pinNote(note){
            this.$emit('pin-note',note)
        },
        duplicateNote(duplicated){
            this.$emit('duplicate-note', duplicated)
        }
    },
    computed: { 
        pinNotes(){
            let notes = this.notes.filter(note => note.isPinned)
            this.pinIsEmpty = notes.length < 1 ? true : false
            console.log('notes',notes)
            return notes
        },
        unPinNotes(){
            let notes = this.notes.filter(note => !note.isPinned)
            this.unPinIsEmpty = notes.length < 1 ? true : false
            return notes
        }
    },
    components: {
        bookPreview
    }
}