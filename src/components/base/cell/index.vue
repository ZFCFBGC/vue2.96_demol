<template>
    <div class="bg" @click="go()">
        <div class="cell">
            <div class="cellLable">{{lable}}</div>
            <div class="cellValue">
                <span class="rightValue">{{value}}</span>
                <img src="../../../assets/arrow_right_b.png" class="cellRight"/>
            </div>
        </div>
        <div class="decaration" v-if="decoration">{{decoration}}</div>
    </div>
    
</template>
<script>
export default {
    props:{
        lable:String,
        value:String,
        decoration:String,
        is_link:Boolean,
        url:String
        // imgUrl:new('../../assets/arrow_right_b.png')
    },
    data(){
        return{

        }
    },
    methods:{
        go(){
            if(this.is_link == true && this.url != ''){
                this.$router.push(this.url)
            }
        }
    },
    mounted(){

    }
}
</script>
<style lang="less" scoped>
    .bg{
        background:#fff;
    }
    .cell{
        display: flex;
        line-height: 30px;
        // border-bottom:1px solid #ccc;
        .cellLable{
            flex:1;
            text-align: left;
        }
        .cellValue{
            flex: 1;
            color:#ccc;
            text-align: right;
            .rightValue{

            }
            .cellRight{
                margin-left: 5px;
                color: #969799;
                min-width: 1em;
                height: 10px;
                line-height: 24px;
                position: relative;
                display: inline-block;
                font: normal normal normal 14px/1 "vant-icon";
                font-size: inherit;
                text-rendering: auto;
                -webkit-font-smoothing: antialiased;
                
            }
        }
    }
    .decaration{
        text-align: left;
        font-size: 14px;
        color:#ccc;
    }
</style>