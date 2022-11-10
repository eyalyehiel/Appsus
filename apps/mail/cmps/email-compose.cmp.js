import { emailService } from '../services/email.service.js';
import { utilService } from '../../../services/util.service.js';

export default {
    // props: ['email'],
    components: {
        emailService,
        utilService
    },
    template: `
        <section>
        <p class="logo-plus" @click="openModal">Compose</p>
        <transition name="slide-fade">
        </section>
        <div class="new-mail" v-if="show" >
        <p> New Message</p>
            <div class="input-line">
                To: 
                <input type="text"  v-model="NewEmail.to" required>
            </div>
            <label class="input-line">
                Subject
                <input type="text" name="" id="" v-model="NewEmail.subject" required>
                <textarea class="free-txt"  type="text" placeholder="" cols="30" rows="20" v-model="NewEmail.title" required></textarea>
            </label>
            <div class="email-compose-btn">
                <button @click="addMail" >Send</button>
                <button @click="cancel" class="btn-cancel">Cancel</button>
            </div>
        </div>
    `,
    data() {
        return {
            myInterval: null,
            NewEmail: null,
            show: false,
        }
    },
    created() {
        this.NewEmail = emailService.getEmptyMail()
    },
    methods: {
        openModal(){
            this.show = !this.show 
        }
    },
    computed: {
        
    },
}