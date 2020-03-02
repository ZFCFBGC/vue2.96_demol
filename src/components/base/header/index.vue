<template>
    <div class="header">
        <div class="H-left" :leftText="leftText" @click="leftClick()">
            <img :src="leftIcon"/>
            <span>{{leftText}}</span>
            <slot></slot>
        </div>
        <div class="H-center" :title="title">{{title}}</div>
        <div class="H-right" :rightText="rightText" @click="rightClick()">
            <span>{{rightText}}</span>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Header',
        props:{
            leftText:'',
            title:'',
            rightText:'',
            leftIcon:''
        },
        data(){
            return{

            }
        },
        methods:{
            leftClick(){
                this.$router.go(-1)
            },
            rightClick(){
                this.$router.go('/')
            }
        },
        mounted(){

        }
    }
</script>
<style lang="less" scoped>
.header{
    position: fixed;
    top:0;
    left:0;
    right:0;
    width:100%;
    display: flex;
    height:60px;
    line-height: 60px;
    background:#fafafa;
    .H-left,.H-right{
        flex:1;
        cursor: pointer;
    }
    .H-center{
        flex:4
    }
}
</style>