import { emailService } from '../services/email.service.js';
import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    components: {
        emailPreview,
    },
    template:`
        <section class="email-list app-main">
        <ul>
            <li v-for= "email in emails" :key="email.id" class="email-preview-container">
                <email-preview :email="email" @remove="deleteEmail"/>
            </li>
        </ul>
        </section>
    `,
    data(){
        return{

        }
    },
    methods: {
        deleteEmail(emailId){
            this.$emit('remove', emailId);
        }
    },
    computed: {

    },
}