import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import { emailService } from '../services/email.service.js';


export default {
    components: {
        emailList,
        emailFilter,
    },
    template: `
        <section class="email-app">
            <h1><span><img src="./assets/img/icons/primary.png" alt=""></span> Primary</h1>

            
           
                <email-list :emails="MailToShow"  @remove="deleteEmail"/>
                
            
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
        },
        deleteEmail(){
            console.log(emailId);
        }
    },
    computed: {
        MailToShow(){
            if (!this.filterBy) return this.emails;
            if (this.filterBy === 'inbox') {
                return this.emails.filter(email => !email.isTrash || !email.isDrafts)
            }
            if (this.filterBy === 'starred') {
                return this.emails.filter(email => email.isStar)
            }
            if (this.filterBy === 'trash') {
                return this.emails.filter(email => email.isTrash)
            }
            if (this.filterBy === 'sent') {
                return this.emails.filter(email => email.isSent)
            }
            return this.filterByTxt
        },
    },

};