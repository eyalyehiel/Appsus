import { emailService } from '../services/email.service.js';
import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    components: {
        emailPreview,
    },
    template:`
        <section class="email-list app-main">
            <input class="search-bar"type="text" placeholder="Search mail">
        <ul>
            <li v-for= "email in emails" :key="email.id" class="email-preview-container" @click="select(email.id)" >
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
        },
        select(emailId) {
            this.$router.push('/email/'+emailId);
        },
    },
    computed: {

    },
}