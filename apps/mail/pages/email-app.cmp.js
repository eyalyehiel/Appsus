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
            
            <email-filter @filtered="setFilter" @upDate="upDate"/>
            <email-list :emails="MailToShow" @remove="deleteEmail" @filterByTxt="filterByTxt"/>         
        </section>
    `,
    created() {
        this.loadMails();

    },
    data() {
        return {
            emails: null,
            selectedMail: null,
            filterBy: {
                type: '',
                txt: '',
            },
           
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
                // this.loadMails();
                this.upDate()
            })
        },
        setFilter(filterBy) {
            this.filterBy.type = filterBy;
        },

        filterByTxt(filterBy) {
            console.log(filterBy);
            this.filterBy.txt = filterBy;
        },
        upDate(){
            emailService.query()
            .then(emails => { this.emails = emails })
        }
    },
    computed: {
        MailToShow() {
            if (!this.emails) return 
            
            console.log('this.emails', this.emails);
            console.log('this.filterBy.txt', this.filterBy.txt);

            const searchStr = this.filterBy.txt.toLowerCase();
            console.log('searchStr', searchStr)
            
            let emails = this.emails.filter(email => {
                return email.subject.toLowerCase().includes(searchStr);})
            

            if (this.filterBy.type === 'inbox') {
                return emails.filter(email => !email.isTrash || !email.isDrafts)
            }
            if (this.filterBy.type === 'starred') {
                return emails.filter(email => email.isStar)
            }
            if (this.filterBy.type === 'drafts') {
                return emails.filter(email => email.isDrafts)
            }
            if (this.filterBy.type === 'trash') {
                return emails.filter(email => email.isTrash)
            }
            if (this.filterBy.type === 'sent') {
                return emails.filter(email => email.isSent)
            }
            console.log(this.emails);
            return emails
        },
    },

};

 // const searchStr = this.filterBy.txt.toLowerCase();
            // var emailToDisplay = this.emails.filter(email => {
            //     return email.toLowerCase().includes(searchStr);
            // });