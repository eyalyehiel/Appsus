export default {
    props: ['info'],
    template: `
    <section class="note-info">
        <h3>Todo list</h3>
        <ul>
            <li v-for="todo in info.todos" :key="todo.txt">
                <h4 :class="{done: !todo.doneAt}">{{todo.txt}} <input type="checkbox" :checked="!todo.doneAt" @change="isChecked(todo.txt)" /></h4>
            </li>
        </ul>

    </section>
    `,
    created() {
    },
    data() {
        return {
                isDone: false,
        }
    },
    methods: {
        isChecked(todoTxt){
            let todo = this.info.todos.find(todo => todo.txt === todoTxt)
            if(todo.doneAt) {
                todo.doneAt = null
                return
            }
            todo.doneAt = new Date(Date.now()).toDateString()
            
        }
    },
    computed: {

    },
}