import { emailService } from '../services/mail.service.js';

export default {
    props: ['emails'],
    template:`
        <section class="email-list">
            <ul>
              <li v-for= "email in emails" :key="email.id" class="email-preview-container">
                <ul>{{email.body}}</ul>
             </li>
            </ul>
        </section>
    `,
    data(){
        return{

        }
    },
    methods: {

    },
    computed: {

    },
}