<template>
    <div>
        2
        <div>
            <input type="text" v-model="num">
        </div>
        <mySon></mySon>
        <div>
            <div>
                <button @click='handleAdd'>add</button>
            </div>
            <div v-for='(item,i) in dL' :key='i'>
                <span @click='$router.push({path: `/page3/${item.id}`})'>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import mySon from "../components/page2_1";
export default {
    components: {
        mySon,
    },
    data() {
        return {
            num: '',
            dL: []
        }
    },
    methods: {
        initList() {
            axios.get('http://localhost:8080/static/page2List.json').then(res => {
                console.log(res)
                const {data: {data, status}} = res
                if(status) {
                    this.dL = data
                }
            })
        },
        handleAdd() {
            const random = Math.floor(Math.random() * 1000)
            const obj = {
                id: random,
                name: `banner${random}`
            }
            this.dL.push(obj)
        }
    },
    created() {
        this.initList()
        console.log('page2 created')
    },
    mounted() {
        console.log('page2 mounted')
    },
    activated() {
        console.log('page2 activated')
    }
}
</script>
