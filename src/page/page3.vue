<template>
    <div>
        3
        <mySon></mySon>
        <div>
            <input type="text" v-model="num">
        </div>
        <div>
            <span>{{id}}</span>
        </div>
    </div>
</template>
<script>
import mySon from "../components/page3_1";
export default {
    components: {
        mySon,
    },
    data() {
        return {
            num: ''
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        } 
    },
    created() {
        
        console.log('page3 created')
    },
    mounted() {
        console.log('page3 mounted')
    },
    activated() {
        console.log(this.$route)
        console.log('page3 activated')
    }
}
</script>
