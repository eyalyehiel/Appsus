export default {
    components: {
        bookList,
        bookFilter,
        bookService,
        bookDetails,
    },
    template: `
    <section class="book-app">
      <book-filter @filtered="setFilter"/>
      <!-- <book-details  @close="closeDetails"/> -->
      <book-list v-else :books="booksToShow"  class="cards-container" @remove="removeBook"/>
    </section>
    `,
    created() {
        this.loadBooks();
        
    },
    data() {
        return {
            books: [],
            filterBy: null
        };
    },
    methods: {
       
    },
    computed: {
        
    },

};