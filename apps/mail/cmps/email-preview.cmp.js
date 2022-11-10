import { emailService } from '../services/email.service.js';

export default {
    props: ['email'],
    components: {
        emailService,
    },
    template: `
        <div class="email-preview" @click="setDetails(email.id)">
            <div class="check-star">
                <input type="checkbox">
                <i class="far fa-star" :class="{checked:email.isStar}" @click.stop="changeColor(email)"></i>
            </div>
            <p>{{email.sendBy}}</p>
           <p>{{email.subject}}</p>
           <p class="time">{{email.sentAt}}</p>
           <div class="icons-preview">
           <i class="fas fa-trash" @click.stop="deleteEmail(email.id)" ></i>
           <i :class="setIcon" @click.stop="toggleIcon(email)"></i>
           </div>
        </div>
    `,
    data() {
        return {

        }
    },
    methods: {
        deleteEmail(emailId) {
            console.log('emailId', emailId);
            if (!this.email.isTrash) {
                this.email.isTrash = true
                emailService.save(this.email)
            } else {
                console.log('isTrash',emailId);
                this.$emit('remove', emailId);
            }
        },
        changeColor(email){
            console.log(email);
            email.isStar = !email.isStar
            emailService.save(email)
        },
        toggleIcon(email) {
            email.isRead = !email.isRead
            emailService.save(email)
                
        },
        setDetails(emailId){
            console.log('emailIdemailId',emailId )
            this.email.isRead = true
            emailService.save(this.email)

            this.$router.push('/email/'+emailId)
        }
    },
    computed: {
        setIcon() {
            if (this.email.isRead) return 'fas fa-envelope-open'
            return 'fas fa-envelope'
        },
    },
}