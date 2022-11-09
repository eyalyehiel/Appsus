export default {

    template:`
    <section class="note-filter">
            
        <input @input="filter" v-model="filterBy.txt" type="search" class="search" />
        <h3 @click="isDisplayed = !isDisplayed">Display only:</h3>
        <section class="wrapper" :class="{display: isDisplayed}">
            
            <ul>
                <li>
                    <label>
                        <input @change="setFilterType('note-txt')"  type="checkbox" checked/>
                        Text
                    </label>
            </li>
            <li>
                <label>
                    <input @change="setFilterType('note-img')"  type="checkbox" checked/>
                    Images
                </label>
            </li>
            <li>
                <label>
                    <input @change="setFilterType('note-video')"  type="checkbox" checked/>
                    Videos
                </label>
            </li>
        </ul>

    </section>
        
    </section>
    `,
    data(){
        return{
            isDisplayed: false,
            filterBy: {
                txt: '',
                types: ['note-txt','note-img','note-video']
            }
        }
    },
    methods: {
        setFilterType(value){
            if(this.filterBy.types.includes(value)) {
                this.filterBy.types.splice(this.filterBy.types.indexOf(value),1)
                this.filter()
                return
            }
            this.filterBy.types.push(value)
            this.filter()
        },
        filter(){
            this.$emit('filter', { ...this.filterBy })
        }
    },
    computed: {

    },
}