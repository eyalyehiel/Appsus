import bookPreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
     <section class="note-list">
         <h3 v-if="!pinIsEmpty" class="title">Pinned</h3>
         <section class="pin-notes">
             <book-preview @open-details="openDetails" @duplicate-note="duplicateNote" @pin-note="pinNote" @update-note="changeBgColor" @delete-note="deleteNote" :note="note" v-for="note in pinNotes" :key="note.id"/>
            </section>
            <h3 v-if="!unPinIsEmpty" class="title">unPinned</h3>
            <section  class="un-pin-notes">
            <book-preview @open-details="openDetails" @duplicate-note="duplicateNote" @pin-note="pinNote" @update-note="changeBgColor" @delete-note="deleteNote" :note="note" v-for="note in unPinNotes" :key="note.id"/>
        </section>
     </section> 
    `,
    created() {
    },
    data() {
        return {
            pinIsEmpty: false,
            unPinIsEmpty: false,
        }
    },
    methods: {
        deleteNote(noteId) {
            this.$emit('deleteNote', noteId)
        },
        changeBgColor(note) {
            this.$emit('update-note', note)
        },
        pinNote(note) {
            this.$emit('pin-note', note)
        },
        duplicateNote(duplicated) {
            this.$emit('duplicate-note', duplicated)
        },
        openDetails(note) {
            console.log(note);
            this.$emit('open-details', note)
        }
    },
    computed: {
        pinNotes() {
            let notes = this.notes.filter(note => note.isPinned)
            this.pinIsEmpty = notes.length < 1 ? true : false
            return notes
        },
        unPinNotes() {
            let notes = this.notes.filter(note => !note.isPinned)
            this.unPinIsEmpty = notes.length < 1 ? true : false
            return notes
        }
    },
    components: {
        bookPreview
    }
}