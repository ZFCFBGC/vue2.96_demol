<template>
    <div class="page">
        <div class="pagination">
            <div class="ptop" @click="prevClick" :style="{'color':active>1?'#fff':'#ccc','background':active>2?'#1989fa':''}">{{prevText?prevText:'上一页'}}</div>
            <div class="pc">
                <div class="pageItem" ref="pcitem" v-for="(list,index) in item" :key="index" @click="Change(index)" :style="{'color':indexs == index?'#fff':'#ccc','background':indexs == index?'#1989fa':'#fff'}">{{list}}</div>
            </div>
            
            <div class="pb" @click="nextClick" :style="{'color':colorShow?'#ccc':'#fff','background':colorShow?'':'#1989fa'}">{{nextText?nextText:'下一页'}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        show_page_size:String,//显示的页码个数
        totalPage:String,//总记录数
        page_count:String,//总页数
        currentPage:String,//当前页
        prevText:String,//上一页
        nextText:String,//下一页
        item_page:String,//每页记录数
        force_ellipses:Boolean,//显示省略号
    },
    data(){
        return{
            mwc:'123456',
            gqg:'654321',
            item:[],
            colorShow:false,
            active:this.currentPage,
            indexs:'',
        }
    },
    methods:{
        prevClick(){
            this.$emit('prevClick',this.mwc)
            this.indexs--
        },
        nextClick(){
            this.$emit('nextClick',this.gqg)
            this.indexs++
            console.log('fff',this.indexs)
            if(this.indexs == this.page_count){
                this.colorShow = true
            }
        },
        Change(index){
            this.$emit('Change',index+1)
            this.indexs = index
            this.active += index
            console.log('处理后的参数',this.indexs,this.active)
        },
        //循环生成元素
        getPage(){
            console.log('这是什么？',this.page_count)
            for(let i = 1;i<this.page_count;i++){
                this.item.push(i)
                console.log('gggg',this.item)
            }
        }
    },
    created(){
        // this.getPage()
    },
    mounted(){
        this.getPage()
    }
}
</script>
<style lang="less" scoped>
.pagination{
    display: flex;
    // font-size: 16px;
    .ptop{
        width:30%;
        line-height: 30px;
    }
    .pc{
        // flex:1;
        width:60%;
        display: flex;
    .pageItem{
        width:30px;
        height:30px;
        line-height: 30px;
        color:#1989fa;
        border: 1px solid #fafafa;
        // background:#1989fa
    }
    }
    .pb{
        width:30%;
        line-height: 30px;
    }
}
</style>