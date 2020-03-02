<template>
    <div class="popup" v-show="showS" @click="showS=false">
        <div class="item" v-if="position=='center'">
            <slot></slot>
        </div>
        <div v-if="position=='left'" class="leftItem">
            <slot></slot>
        </div>
        <div v-if="position=='right'" class="rightItem">
            <slot></slot>
        </div>
        <div v-if="position=='top'" class="topItem">
            <slot></slot>
        </div>
        <div v-if="position=='bottom'" class="bottomItem">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        position:String,
        show:Boolean
    },
    data(){
        return{
            showS:this.show
        }
    },
}
</script>
<style lang="less" scoped>
    .popup{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        .item{
            background:#fff;
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
        }
        .leftItem{
            position: absolute;
            top:0;
            left:0;
            background:#fff;
            height:100vh;
            // width:10%;
        }
        .rightItem{
            position: absolute;
            top:0;
            right:0;
            background:#fff;
            height:100vh;
            // width:10%;
        }
        .topItem{
            position: absolute;
            top:0;
            right:0;
            left:0;
            background:#fff;
            width:100%;
        }
        .bottomItem{
            position: absolute;
            bottom:0;
            right:0;
            left:0;
            background:#fff;
            width:100%;
        }
    }
</style>