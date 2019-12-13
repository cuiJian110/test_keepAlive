<template>
    <div>
        1
        <div>
            <mySon></mySon>
            <button @click='num++'>add</button>
            <input type="text" v-model="num">
        </div>
    </div>
</template>
<script>
import mySon from "../components/page1_1";
export default {
    components: {
        mySon,
    },
    data() {
        return {
            num: ''
        }
    },
    created() {
        console.log('page1 created')
    },
    mounted() {
        console.log('page1 mounted')
    },
    activated() {
        console.log('page1 activated')
    }
}
</script>
