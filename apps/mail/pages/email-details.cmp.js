import { emailService } from '../services/email.service.js';
import emailFilter from '../cmps/email-filter.cmp.js';


export default {
    // props: ['email'],
    components: {
        emailService
    },
    template: `
        <main class="email-details-container">
          <section v-if="email">
               <div>
               
              </div>
          </section>
        </main>
    `,
    data() {
        return {
            email: null,
        }
    },
    created() {
        const { emailId } = this.$route.params;
        emailService.getById(emailId).then(email => this.email = email);
        console.log('mailId', this.$route.params)
       
    },
    methods: {

    },
    
    computed: {

    },
}