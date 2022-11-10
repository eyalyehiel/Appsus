import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import { emailService } from '../services/email.service.js';
import emailDetails from '../pages/email-details.cmp.js'

export default {
    components: {
        emailList,
        emailFilter,
        emailService,
        emailDetails
    },
    template: `
    <div>
        <!-- <input @input="setFilter" v-model="filter.title" type="text" placeholder="Search mail" class="filter-text"> -->
    </div>
        <section class="email-app">
            <email-filter @filtered="setFilter" />
            <email-list :emails="MailToShow" @remove="deleteEmail"/>         
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
                .then(emails => { this.emails = emails })
        },
        deleteEmail(emailId) {
            emailService.remove(emailId).then(()=>{
                this.emails = this.emails.filter(email => email.id !== emailId)
                this.loadMails();
                console.log(this.emails)
            })
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        filter(filter) {
            this.filter = filter;
        }
    },
    computed: {
        MailToShow() {
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