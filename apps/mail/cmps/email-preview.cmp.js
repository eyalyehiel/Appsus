import { emailService } from '../services/email.service.js';

export default {
    props: ['email'],
    components: {
        emailService,
    },
    template: `
        <div class="email-preview">
            <div>
                <input type="checkbox">
                <i class="far fa-star" :class="{checked:email.isStar}" @click.stop="changeColor(email)"></i>
            </div>

            <p>{{email.sendBy}}</p>
           <p>{{email.subject}}</p>
           <p>{{email.sentAt}}</p>
           <div class="icons-preview">
           <i class="fas fa-trash" :class={opacity:hover} @click.stop="deleteEmail(email.id)" ></i>
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
        }
    },
    computed: {

    },
}