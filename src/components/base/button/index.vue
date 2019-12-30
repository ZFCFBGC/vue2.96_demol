<template>
<div>
  <!-- 主要按钮 -->
  <div v-if = "type == 'primary'" class="primary" @click="onClick" :style="{color:color,background:background}">
    <slot>{{ text }}</slot>
  </div>
  <!-- 默认按钮 -->
  <div v-if = "type == 'default'" class="btn" @click="onClick" :style="{color:color,background:background}">
    <slot>{{ text }}</slot>
  </div>
  <!-- 消息按钮 -->
  <div v-if = "type == 'info'" class="info" @click="onClick" :style="{color:color,background:background}">
    <slot>{{ text }}</slot>
  </div>
  <!-- 警告按钮 -->
  <div v-if = "type == 'warning'" class="warning" @click="onClick" :style="{color:color,background:background}">
    <slot>{{ text }}</slot>
  </div>
  <!-- 危险按钮 -->
  <div v-if = "type == 'danger'" class="danger" @click="onClick" :style="{color:color,background:background}">
    <slot>{{ text }}</slot>
  </div>
  <div v-if = "type == 'plainInfo'" class="plainInfo" @click="onClick" :style="{color:color,background:background}">
    <slot>{{ text }}</slot>
  </div>
</div>
  
</template>
<script>
export default {
   name: 'Button',
   props:{
     text:String,
     type:String,
     color:String,
     background:String
   },
   data(){
     return {
       gqg:'123456',
      //  type:this.type,
      //  text:this.text
     }
   },
   methods:{
      onClick(){
        //子组件需要使用this.$emit 将子组件的事件进行上级传递,onClick是使用的方法名可以自定义,this.gqg则是传递的参数
        this.$emit('onClick',this.gqg);
      }
   },
   mounted(){
    //  console.log('ggg',this.type,this.text)
   }
}
</script>
<style lang="less" scoped>
  .btn{
    width:100px;
    height:40px;
    border:1px solid #ddd;
    text-align:center;
    line-height:40px;
    cursor: pointer;
  }
  //默认按钮
  .default{
    width:100px;
    height:40px;
    border:1px solid #ddd;
    text-align:center;
    line-height:40px;
  }
  //主要按钮
  .primary{
    width:100px;
    height:40px;
    border:1px solid #07c160;
    text-align:center;
    line-height:40px;
    color:#fff;
    background:#07c160
  }
  //信息按钮
  .info{
    width:100px;
    height:40px;
    border:1px solid #1989fa;
    text-align:center;
    line-height:40px;
    color:#fff;
    background:#1989fa
  }
  //警告按钮
  .warning{
    width:100px;
    height:40px;
    border:1px solid #ff976a;
    text-align:center;
    line-height:40px;
    color:#fff;
    background:#ff976a
  }
  //危险按钮
  .danger{
    width:100px;
    height:40px;
    border:1px solid #ee0a24;
    text-align:center;
    line-height:40px;
    color:#fff;
    background:#ee0a24
  }
  //朴素按钮
  .plainPrimary{
    width:100px;
    height:40px;
    border:1px solid #07c160;
    text-align:center;
    line-height:40px;
    color:#07c160
  }
  .plainInfo{
    width:100px;
    height:40px;
    border:1px solid #1989fa;
    text-align:center;
    line-height:40px;
    color:#1989fa
  }
  //细边框
  .hairline{
    width:100px;
    height:40px;
    border:1px solid #07c160;
    text-align:center;
    line-height:40px;
    color:#07c160
  }
</style>