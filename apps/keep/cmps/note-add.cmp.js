import { eventBus } from '../../../services/event-bus.service.js'

export default {

    template: `
     <section class="note-add">
         
        <form @submit="addNote">
            <input ref="text" v-model="inputData" class="first" type="text" placeholder="enter text" />
            <button @click.prevent="setNewNote('note-txt')"><img src="./assets/img/icons/noteadd.png"></button>
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
            inputData: '',
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
            if(this.newNote.type === 'note-img') this.newNote.info.url = this.inputData
            if(this.newNote.type === 'note-txt') this.newNote.info.txt = this.inputData
            this.$emit('note-added', this.newNote)
            console.log(this.newNote);
            this.inputData = ''
            this.newNote = { type: 'note-txt', info: { txt: '' } }
            eventBus.emit('user-msg','Note added!')
        },
        setNewNote(type){
            if(type === 'note-txt'){
                this.newNote = { type: 'note-txt', info: { txt: '' } }
                this.$refs.text.placeholder = 'Enter text'
            }
            if(type === 'note-img'){
                this.newNote = { type: 'note-img', info: { url: '', txt: '' } }
                this.$refs.text.placeholder = 'Enter image url'
            }
        },
    },
    computed: {

    },
}