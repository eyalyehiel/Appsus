export default {
    props: ['note'],
    template: `
        <section :style="this.note.style" class="note-details">
            <input v-model="noteTxt" type="text" />
            <section class="note-body">
                    <h3>{{noteTxt}}</h3>
                    <img v-if="currNote.type === 'note-img'" :src="url">
                    <section v-if="currNote.type === 'note-video'" v-html="url"></section>
                    <ul v-if="currNote.type === 'note-todos'">
                        <li v-for="todo in todos" :key="todo.txt">
                        <h4 :class="{done: !todo.doneAt}">{{todo.txt}} <input type="checkbox" :checked="!todo.doneAt" /></h4>
                        </li>
                    </ul>
            </section>
            <section class="controls">
                <button @click.prevent="duplicateNote"><img src="./assets/img/icons/copy.png"></button>
                <button @click.prevent="deleteNote"><img src="./assets/img/icons/garbage.png"></button>
                <button class="pallete-holder"><img src="./assets/img/icons/pallete.png"><input type="color" class="pallete" ref="pallete" @input="changeBgColor"></button>
                <button @click.prevent="pinNote"><img src="./assets/img/icons/pin.png"></button>
                <button class="close-btn" @click="closeNote"><img src="./assets/img/icons/close.png"></button>
            </section>
        </section>
    `,
    created() {
        this.setNote()
    },
    data() {
        return {
            noteTxt: '',
            currNote: null,
            url: null,
            todos: null,
        }
    },
    methods: {
        closeNote() {
            this.$emit('close-note')
        },
        setNote() {
            this.currNote = this.note
            switch (this.note.type) {
                case 'note-txt': {
                    this.noteTxt = this.note.info.txt;
                    break;
                }
                case 'note-img': {
                    this.url = this.note.info.url;
                    this.noteTxt = this.note.info.title;
                    break;
                }
                case 'note-video': {
                    this.url = this.note.info.url;
                    break;
                }
                case 'note-todos': {
                    this.todos = this.note.info.todos;
                    this.noteTxt = this.note.info.txt
                }
            }
        }
    },
    computed: {

    },
}