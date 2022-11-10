import { noteService } from "../services/note.service.js"
import { eventBus } from "../../../services/event-bus.service.js"

import noteAdd from "../cmps/note-add.cmp.js"
import noteFilter from "../cmps/note-filter.cmp.js"
import noteList from "../cmps/note-list.cmp.js"


export default {

    template: `
    <section class="note-app">
        <note-filter @filter="filter" />
        <note-add @note-added="addNote"/>
        <note-list @duplicate-note="addNote"  @pin-note="pinNote" @update-note="changeBgColor" @delete-note="deleteNote" v-if="notes" :notes="notesToDisplay"/>
    </section>
    `,
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
            })
    },
    data() {
        return {
            notes: null,
            filterBy: {
                txt: '',
                types: ['note-txt','note-img','note-video','note-todos'],
            }
        }
    },
    methods: {
        filter(filterBy){
            this.filterBy = filterBy
        },
        addNote(newNote) {
            console.log(newNote);
            noteService.post(newNote)
                .then(() => {
                    noteService.query()
                        .then(notes => this.notes = notes)
                })
        },
        deleteNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    noteService.query()
                        .then(notes => this.notes = notes)
                })
            
        },
        changeBgColor(note) {
            noteService.put(note)
                .then(() => {
                    noteService.query()
                        .then(notes => this.notes = notes)
                })
        },
        pinNote(note) {
            noteService.put(note)
                .then(() => {
                    console.log('hi');
                    noteService.query()
                        .then(notes => {
                            console.log('notes',notes);
                            this.notes = notes
                        })
                })
        },
    },
    computed: {
        notesToDisplay(){
            const regex = new RegExp(this.filterBy.txt, 'i')
            let notes = this.notes.filter(note => {
                if(note.type === 'note-txt') return regex.test(note.info.txt)
                if(note.type === 'note-img') return regex.test(note.info.title)
                if(note.type === 'note-todos') return regex.test(note.info.label)
            }) 
            notes = notes.filter(note => {
                var isMatch = false
                this.filterBy.types.forEach(type => {
                    if(type === note.type) 
                    isMatch = true
                })
                return isMatch 
            })
            console.log(notes);           
            return notes
        }
    },
    components: {
        noteAdd,
        noteFilter,
        noteList,
    }
}