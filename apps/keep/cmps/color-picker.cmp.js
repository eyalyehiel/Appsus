export default {

    template:`
    <section class="colors">
            <div class="clr1 btn" @click="updateColor('#f28b82')"></div>
            <div class="clr2 btn" @click="updateColor('#fff475')"></div>
            <div class="clr3 btn" @click="updateColor('#fbbc04')"></div>
            <div class="clr4 btn" @click="updateColor('#ccff90')"></div>
            <div class="clr5 btn" @click="updateColor('#a7ffeb')"></div>
            <div class="clr6 btn" @click="updateColor('#cbf0f8')"></div>
            <div class="clr7 btn" @click="updateColor('#aecbfa')"></div>
            <div class="clr8 btn" @click="updateColor('#d7aefb')"></div>
            <div class="clr9 btn" @click="updateColor('#fdcfe8')"></div>
            <div class="clr10 btn" @click="updateColor('#e6c9a8')"></div>
            <div class="clr11 btn" @click="updateColor('#e8eaed')"></div>
            <div class="clr12 btn" @click="updateColor('#fff')"></div>
        </section>
    `,
    data(){
        return{

        }
    },
    methods: {
        updateColor(value){
            this.$emit('update-color',value)
        }
    },
    computed: {

    },
}