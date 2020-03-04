<template>
    <div class="tabnav">
        <div class="footer">
            <div v-for="(item,index) in items" :key="index" class="item" @click="select(index)">
                <div class="title" :class="index==active?'origin':'grap'"><span>{{item.title}}</span></div>
                <div class="img"><img :src="index==active?item.active:item.normal" :alt="item.title"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        items:Array
    },
    data(){
        return{
            selected:'',
            active:''
        }
    },
    methods:{
        select(index){
            // console.log('这是什么？',index)
            this.active = index
            switch(index){
                case 0:
                    this.$router.push('/')
                    ;break;
                case 1:
                    this.$router.push('/');
                    break;
                case 2:
                    this.$router.push('/');
                    break;
                case 3:
                    this.$router.push('/');
                    break;
            }
        }
    }
}
</script>
<style scoped>
.tabnav{
    position: fixed;
    /* width:100%; */
    bottom:0;
    left:0;
    right:0;
    overflow: hidden;
    z-index: 10;
}
.footer{
    display: flex;
    /* flex-direction: column */
}
.item{
    display:flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    line-height: 30px;
}
.item .title{
    font-size: 15px;
}
.item .grap{
    color:#ccc
}
.item .origin{
    color:orange
}
.item .img{

}
.item .img img{
    width:17px;
    height:17px;
}
</style>