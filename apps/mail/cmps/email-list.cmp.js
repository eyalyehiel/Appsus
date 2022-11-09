import { emailService } from '../services/email.service.js';
import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    components: {
        emailPreview,
    },
    template:`
        <section class="email-list">
            <li v-for= "email in emails" :key="email.id">
                <email-preview :email="email" @remove="deleteEmail"/>
            </li>
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