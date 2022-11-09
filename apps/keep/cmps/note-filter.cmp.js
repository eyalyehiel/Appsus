export default {

    template:`
    <section class="note-filter">
            
        <input type="search" class="search" />
        <h3 @click="isDisplayed">Display only:</h3>
        <ul>
            <li>
                <label>
                    <input type="checkbox"/>
                    Text
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox"/>
                    Images
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox"/>
                    Videos
                </label>
            </li>
        </ul>

    </section>
    `,
    data(){
        return{

        }
    },
    methods: {
        isDisplayed(){
            
        }
    },
    computed: {

    },
}