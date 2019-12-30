<template>
    <div>
        <div>
            <div class="tipOverlay" v-if="show">
                <div class="title" :style="{color:textcolor}">{{title}}</div>
                <div class="text" :style="{color:textcolor}">{{text}}</div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'Button',
    data(){
        return{
            show:false,
            text:'',
            title:'',
            textcolor:'#fff'
        }
    }
}
</script>
<style lang="less" scoped>
    // .tip{
    //     width:100%;
    //     height:100%;
    //     background:rgba(0,0,0,0.5);
    //     top:0;
    //     left:0;
    //     position: fixed;
        .tipOverlay{
            width: 660/750 * 100vw;
            max-width: 330px;
            overflow: hidden;
            background:rgba(0,0,0,0.5);
            border-radius: 10px;
            position: fixed;
            z-index: 100000000;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            text-align:center;
            z-index:100;
            .title{
                font-size: 16px;
                line-height: 30px;
                // color: #fff;
                text-align: center;
                letter-spacing: 1px;
            }
            .text{
                font-size: 16px;
                line-height: 60px;
                // color: #fff;
                text-align: center;
                letter-spacing: 1px;
                text-indent: 1px;
            }
        }
    // }
    
</style>