<template>
    <div>
        4
        <div>
            <mySon></mySon>
        </div>
        <div>
            <input type="text" v-model="num">
        </div>
    </div>
</template>
<script>
import mySon from "../components/page4_1";
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
        console.log('page4 created')
    },
    mounted() {
        console.log('page4 mounted')
    },
    activated() {
        console.log('page4 activated')
    }
}
</script>
