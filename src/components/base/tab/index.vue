<template>
    <div class="tab">
        <div class="tabMain">
            <div v-for="(item,index) in tabList" :key="item.id" @click="tabClick(index)">{{text}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        tabList:Array,
        active:Number
    },
    data(){
        return{
            tabList:[
                {
                    id:'1',
                    text:'星期一'
                },
                {
                    id:'2',
                    text:'星期二'
                },
                {
                    id:'3',
                    text:'星期三'
                },
                {
                    id:'4',
                    text:'星期四'
                }
            ]
        }
    },
    methods:{
        tabClick(index){

        }
    }
}
</script>
<style scoped>

</style>