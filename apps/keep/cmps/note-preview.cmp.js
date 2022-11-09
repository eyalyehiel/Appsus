import noteImg from "./note-img.cmp.js";
import noteTxt from "./note-txt.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteVideo from "./note-video.cmp.js";

export default {
    props: ['note'],
    template:`
    <article :style="note.style" class="note-preview">

        <component :is="note.type" :info="note.info" />
        <section class="options">
            <button><img src="./assets/img/icons/email.png"></button>
            <button @click="deleteNote"><img src="./assets/img/icons/garbage.png"></button>
            <button class="pallete-holder"><img src="./assets/img/icons/pallete.png"><input type="color" class="pallete" ref="pallete" @input="changeBgColor"></button>
            <button><img src="./assets/img/icons/pin.png"></button>
            <button><img src="./assets/img/icons/send.png"></button>
        </section>
    </article>
    `,
    created(){
    },
    data(){
        return{

        }
    },
    methods: {
        deleteNote(){
            this.$emit('delete-note',this.note.id)
        },
        changeBgColor(){
            this.note.style = { backgroundColor: this.$refs.pallete.value}
            this.$emit('update-note',this.note)
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