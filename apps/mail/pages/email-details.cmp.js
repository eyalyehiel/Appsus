import { emailService } from '../services/email.service.js';
import emailFilter from '../cmps/email-filter.cmp.js';


export default {
    // props: ['email'],
    components: {
        emailService,
        emailFilter
    },
    template: `
        <main class="email-details-container">
        <section>
        <email-filter @click.native="filter" />
        </section>
          <section v-if="email" class="email-details app-main">
          <div class="email-title">
                <p>{{email.subject}}</p>
                <div class="email-icons">
                    <i class="fas fa-share" ></i>
                    <i class="fas fa-paper-plane"></i>
                    <i class="fas fa-trash"></i>
                </div>
            </div>
            <div class="send-details">
                <i class="far fa-user icon"></i>
                <p>{{email.sendBy}}</p>
                <p>{{email.to}}</p>
                <p>{{email.sentAt}}</p>
            </div>
            <div class="send-body">
                <p v-for="p in email.title" >
                    {{p}}
                </p>
            </div>
            <pre>
            Contact information: Expedia, Attn: EMC Team 1111 Expedia Group Way W., Seattle WA 98119.
            Expedia cannot receive replies to this email.

            CST# 2029030-50

            Expedia Rewards terms and conditions apply

            © 2021 Expedia, Inc. All rights reserved.
            Expedia, Expedia Rewards, VIP Access and the Airplane logos are registered trademarks,
            or trademarks, of Expedia, Inc. in the U.S. and/or other countries.
            All other products are trademarks of their respective owners.

            </pre>
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