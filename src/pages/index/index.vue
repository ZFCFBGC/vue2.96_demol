<template>
  <div class="index">
    <div class="head">demol页面</div>
    <Button @onClick="goPath">国企更1</Button>
    <div class="tab" ref="tab">
      <div
        class="tan_one"
        v-for="(item, index) in arr"
        @click="goScroll(index)"
        :key="index"
        ref="tab_w"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>

export default {
  components: {
  },
  data(){
    return {
      gqg:'',
      arr:['过去','看来','说的话','国企更','风尚大典','都是几个','的撒娇'],
      status:false,
      left:null,
    }
  },
  watch: {
    left: function (val) {
      console.log('--------',val)
    }
  },
  mounted() {
    console.log('tools',tools.checkID('360313199105174016'))
  },
  methods:{
    goPath(e){
      console.log('事件触发')
      console.log('接收父组件传递过来的参数',e)
    },
    goScroll(idx){
      var scrollw = this.$refs.tab.scrollWidth; //滚动条宽度
      this.left = this.$refs.tab.scrollLeft;//滚动条距左边的距离
      var w = document.documentElement.clientWidth
      if(this.left==(scrollw-w)){
        this.status = true
      }else if(this.left==0){
        this.status = false
      }
      var Domw = this.$refs.tab_w[0].offsetWidth;//元素的宽度
      //先判断能显示几个
      var num = Math.floor(w/Domw)
      
      if(!this.status){
        if(idx>=num-1&&idx<=this.arr.length-num){
          this.$refs.tab.scrollLeft = Domw*(idx)
        }else if(idx==this.arr.length-num){
          this.$refs.tab.scrollLeft = scrollw-w
        }else if(idx>this.arr.length-num||idx<num-1){
          console.log('不移动左')
        }
      }else{
        console.log('jinlai')
        if(idx>=num-1&&idx<=this.arr.length-num){
           this.$refs.tab.scrollLeft = (scrollw-w)-(this.arr.length-(idx+1))*Domw
        }else if(idx==this.arr.length-num){
          this.$refs.tab.scrollLeft = scrollw-w
        }else if(idx>this.arr.length-num||idx<num-1){
          console.log('不移动右')
        }
       
      }
    }
  }
}
</script>
<style lang="less" scoped>
.index {
  .head {
    font-size: 32px;
  }
}
.tab {
  height: 40px;
  background: #f40;
  width: 100%;
  overflow-x: auto; /*添加横向滚动条*/
  white-space: nowrap; /*不换行*/
  -ms-overflow-style: none; //ie隐藏滚动条
  .tan_one {
    width: 100px;
    height: 40px;
    color: #fff;
    line-height: 40px;
    display: inline-block;
    text-align: center;
  }
}
.tab::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
