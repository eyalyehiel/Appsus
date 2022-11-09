import { noteService } from "../services/note.service.js"


import noteAdd from "../cmps/note-add.cmp.js"
import noteFilter from "../cmps/note-filter.cmp.js"
import noteList from "../cmps/note-list.cmp.js"
// import notePreview from "../cmps/note-preview.cmp.js"

export default {

    template:`
    <section class="note-app">
        <note-filter />
        <note-add />
        <note-list v-if="notes" :notes="notes"/>
    </section>
    `,
    created(){
        noteService.query()
            .then(notes => {
                console.log(notes);
                this.notes = notes
            })
    },
    data(){
        return{
            notes: null
        }
    },
    methods: {

    },
    computed: {

    },
    components: {
        noteAdd,
        noteFilter,
        noteList,
    }
}