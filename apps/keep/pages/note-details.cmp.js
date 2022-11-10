export default {
    props: ['note'],
    template:`
        <section v-if="currNote" class="note-details">
            <input type="text" />
            <section class="note-body">
                    <pre>{{note}}</pre>
            </section>
            <section class="controls">

            </section>
        </section>
    `,
    data(){
        return{
            noteTxt: '',
            currNote: null
        }
    },
    methods: {
        setNote(){
            this.currNote = this.note
            switch(this.note.type){
                case 'note-txt': {
                    this.noteTxt = this.note.info.txt
                }
            }
        }
    },
    computed: {

    },
}