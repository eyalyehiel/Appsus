import { emailService } from '../services/email.service.js';

export default {
    props: ['email'],
    components: {
        emailService,
    },
    template: `
        <div class="email-preview">
            <div class="1">
                <input type="checkbox">
                <button class="star"><img src="./assets/img/icons/grade.png" alt=""></button>
            </div>
            <p>{{email.sendBy}}</p>
           <p>{{email.subject}}</p>
           <p>{{email.sentAt}}</p>
           <button class="trash" @click.stop="deleteEmail(email.id)"><img src="./assets/img/icons/delete.png" alt=""></button>
           
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
            }
        }
    },
    computed: {

    },
}