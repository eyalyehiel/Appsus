import { noteService } from "../services/note.service.js"


import noteAdd from "../cmps/note-add.cmp.js"
import noteFilter from "../cmps/note-filter.cmp.js"
import noteList from "../cmps/note-list.cmp.js"


export default {

    template:`
    <section class="note-app">
        <note-filter />
        <note-add @note-added="addNote"/>
        <note-list v-if="notes" :notes="notes"/>
    </section>
    `,
    created(){
        noteService.query()
            .then(notes => {
                this.notes = notes
            })
    },
    data(){
        return{
            notes: null
        }
    },
    methods: {
        addNote(newNote){
            noteService.post(newNote)
                .then(() => {
                    noteService.query()
                    .then(notes => this.notes = notes)
                })
        }
    },
    computed: {

    },
    components: {
        noteAdd,
        noteFilter,
        noteList,
    }
}