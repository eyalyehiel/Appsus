import noteImg from "./note-img.cmp.js";
import noteTxt from "./note-txt.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteVideo from "./note-video.cmp.js";

export default {
    props: ['note'],
    template: `
    <article :style="note.style" class="note-preview">
        <component @click="openDetails" :is="note.type" :info="note.info" />
        <section class="options" >
            <button @click="duplicateNote"><img src="./assets/img/icons/copy.png"></button>
            <button @click="deleteNote"><img src="./assets/img/icons/garbage.png"></button>
            <button class="pallete-holder"><img src="./assets/img/icons/pallete.png"><input type="color" class="pallete" ref="pallete" @input="changeBgColor"></button>
            <button @click="pinNote"><img src="./assets/img/icons/pin.png"></button>
            <button><img src="./assets/img/icons/send.png"></button>
        </section>
    </article>
    `,
    created(){
    },
    data() {
        return {
            optionsOpen: false
        }
    },
    methods: {
        deleteNote() {
            this.$emit('delete-note', this.note.id)
        },
        changeBgColor() {
            this.note.style = { backgroundColor: this.$refs.pallete.value }
            this.$emit('update-note', this.note)
        },
        pinNote() {
            if (this.note.isPinned) {
                this.note.isPinned = false
                this.$emit('pin-note', this.note)
                return
            }
            this.note.isPinned = true
            this.$emit('pin-note', this.note)

        },
        duplicateNote() {
            var duplicated = this.note
            delete duplicated.id
            this.$emit('duplicate-note', duplicated)
        }

    },
    computed: {

    },
    components: {
        noteImg,
        noteTodos,
        noteTxt,
        noteVideo
    }
}