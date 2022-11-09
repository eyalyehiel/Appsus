import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import { emailService } from '../services/mail.service.js';


export default {
    components: {
        emailList,
        emailFilter,
    },
    template: `
        <section class="email-app">
            <h1>email</h1>
          <email-list :emails="emails"/>
        </section>
    `,
    created() {
        this.loadMails();

    },
    data() {
        return {
            emails: null,
            selectedMail: null,
            filterBy: '',
        };
    },
    methods: {
        loadMails() {
            emailService.query()
                .then(emails => {this.emails = emails})
                .then(console.log('emails',this.emails))
        }
    },
    computed: {

    },

};