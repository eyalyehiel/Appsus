// import emailCompose from '../cmps/email-compose.cmp.js';

export default {
    props: ['counter'],
    components: {

    },
    template: `
        <div class="gmail-filter">

        <div class="filter" @click="filter('inbox') ">
                <i class="fas fa-inbox"></i>
                <p>Inbox</p>
        </div>

        <div class="filter" @click="filter('starred')">
        <i class="fas fa-star"></i>
        <p>Starred</p>
        </div>

        <div class="filter" @click="filter('sent')">
        <i class="far fa-share-square"></i>
        <p>Sent</p>
        </div>

        <div class="filter" @click="filter('drafts')">
        <i class="far fa-sticky-note"></i>
        <p>Drafts</p>
        </div>

        <div class="filter" @click="filter('trash')">
        <i class="fas fa-trash"></i>
        <p>Trash</p>
        </div>

       </div>
    `,
    data() {
        return {
            filterBy: null,
            isSelect: false,
            selects: {
                inbox: false,
                starred: false,
                sent: false,
                drafts: false,
                trash: false
            },
        }
    },
    methods: {
        filter(sort){
            this.$emit('filtered', sort)
            for (const key in this.selects) {
                if (key !== sort) {
                    this.selects[key] = false
                } else this.selects[key] = true
            }
        }
    },
    computed: {

    },
}