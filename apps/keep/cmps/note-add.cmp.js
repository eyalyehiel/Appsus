import { eventBus } from '../../../services/event-bus.service.js'

export default {

    template: `
     <section class="note-add">
         
        <form @submit.prevent="addNote">
            <input ref="text" v-model="inputData" class="first" type="text" placeholder="Enter text" />
            <button @click.prevent="setNewNote('note-txt')"><img src="./assets/img/icons/noteadd.png"></button>
            <button @click.prevent="setNewNote('note-img')"><img src="./assets/img/icons/image.png"></button>
            <button @click.prevent="setNewNote('note-video')"><img src="./assets/img/icons/video.png"></button>
            <button @click.prevent="setNewNote('note-todos')"><img src="./assets/img/icons/list.png"></button>
            <button class="last"><img src="./assets/img/icons/add.png"></button>
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
            switch(this.newNote.type){
                case 'note-img':
                case 'note-video': this.newNote.info.url = this.inputData; break;
                case 'note-txt': this.newNote.info.txt = this.inputData; break;
                case 'note-todos': this.makeTodos(); break;
            }
            this.$emit('note-added', this.newNote)

            this.inputData = ''
            this.newNote = { type: 'note-txt', info: { txt: '' } }
            const msg = {
                txt: 'Note added!',
                type: 'succes'
            }
            // showSuccessMsg('Note added!')
        },
        setNewNote(type){
            if(type === 'note-txt'){
                this.newNote = { type: 'note-txt', info: { txt: '' } }
                this.$refs.text.placeholder = 'Enter text'
                return
            } else if(type === 'note-img'){
                this.newNote = { type: 'note-img', info: { url: '', title: '' } }
                this.$refs.text.placeholder = 'Enter image url'
                return
            } else if(type === 'note-video'){
                this.newNote = { type: 'note-video', info: { url: '', txt: '' } }
                this.$refs.text.placeholder = 'Enter embedded video url'
                return
            } else if(type === 'note-todos'){
                this.newNote = { type: 'note-todos', info: { label: '', todos: [] } }
                this.$refs.text.placeholder = 'Enter comma seperated list'
            }
        },
        makeTodos(){
            let todos = this.inputData.split(',')
            todos = todos.map(todo => {
                return { txt: todo, doneAt:null }
            })
            this.newNote.info.todos = todos
        }
    },
    computed: {

    },
}