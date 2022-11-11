import { emailService } from '../services/email.service.js';

export default {
    props: ['email'],
    components: {
        emailService,
    },
    template: `
        <div class="email-preview" @click="setDetails(email.id)">
            
            <div class="check-star">
                <input  type="checkbox">
                <i :class="setStar" :class="{checked:email.isStar}" @click.stop="changeColor(email)"></i>
                
            </div>
            <p>{{email.sendBy}}</p>
           <p>{{email.subject}}</p>
           <p class="time">{{email.sentAt}}</p>
           <div class="icons-preview">
              <i class="fas fa-trash trash"  @click.stop="deleteEmail(email.id)" ></i>
              <i :class="setIcon" :class="{isRead:email.isRead}" @click.stop="toggleIcon(email)"></i>
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
            
            email.isStar = !email.isStar
            emailService.save(email)
        },
        toggleIcon(email) {
            email.isRead = !email.isRead
            emailService.save(email)
                
        },
        setDetails(emailId){
            
            this.email.isRead = true
            emailService.save(this.email)

            this.$router.push(`/mail/${emailId}`)
        }
    },
    computed: {
        setIcon() {
            if (this.email.isRead) return 'fas fa-envelope-open'
            return 'fas fa-envelope'
        },
        setStar(){
            if (this.email.isStar) return 'fas fa-solid fa-star'
            return 'far fa-star'  
        },
    },
}