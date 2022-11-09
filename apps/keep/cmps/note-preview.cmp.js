import noteImg from "./note-img.cmp.js";
import noteTxt from "./note-txt.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteVideo from "./note-video.cmp.js";

export default {
    props: ['note'],
    template:`
    <article class="note-preview">

        <component :is="note.type" :info="note.info" />
        <section class="options">
            <button><img src="./assets/img/icons/email.png"></button>
            <button><img src="./assets/img/icons/garbage.png"></button>
            <button><img src="./assets/img/icons/pallete.png"></button>
            <button><img src="./assets/img/icons/pin.png"></button>
            <button><img src="./assets/img/icons/send.png"></button>
        </section>
    </article>
    `,
    created(){
        console.log(this.note);
    },
    data(){
        return{

        }
    },
    methods: {

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