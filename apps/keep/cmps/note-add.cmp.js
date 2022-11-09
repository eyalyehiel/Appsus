import { eventBus } from '../../../services/event-bus.service.js'

export default {

    template: `
     <section class="note-add">
         
        <form @submit="addNote">
            <input ref="text" v-model="newNote.info.txt" class="first" type="text" placeholder="enter text" />
            <button @click.prevent="newNote.type = 'note-txt'"><img src="./assets/img/icons/noteadd.png"></button>
            <button @click.prevent="setNewNote('note-img')"><img src="./assets/img/icons/image.png"></button>
            <button @click.prevent="newNote.type = 'note-video'"><img src="./assets/img/icons/video.png"></button>
            <button class="last">save</button>
        </form>
     </section>
    `,
    created() {

    },
    mounted(){
        this.$refs.text.focus()
    },
    data() {
        return {
            newNote: {
                type: 'note-txt',
                info: {
                    txt: '',
                }
            },
        }
    },
    methods: {
        addNote() {
            this.$emit('note-added', this.newNote)
            console.log(this.newNote);
            this.newNote = { type: 'note-txt', info: { txt: '' } }
            eventBus.emit('user-,sg','Note added!')
        },
        setNewNote(type){
            if(type === 'note-txt'){
                this.newNote = { type: 'note-txt', info: { txt: '' } }
            }
            if(type === 'note-img'){
                this.newNote = { type: 'note-img', info: { txt: '', url: '' } }
                this.$refs.text.placeholder = 'Enter image url'
            }
        }

    },
    computed: {

    },
}