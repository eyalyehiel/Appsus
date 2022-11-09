import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';


export default {
    components: {
        emailList,
        emailFilter,
    },
    template: `
        <section class="email-app">
            <h1>email</h1>
           
        </section>
    `,
    created() {
        this.loadBooks();
        
    },
    data() {
        return {
            emails: null,
            selectedMail: null,
            filterBy: '',
        };
    },
    methods: {
       
    },
    computed: {
        
    },

};