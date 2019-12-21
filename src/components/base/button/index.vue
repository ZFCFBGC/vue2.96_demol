<template>
  <div class="btn" @click="onClick">
    <slot>{{ text }}</slot>
  </div>
</template>
<script>
export default {
   name: 'Button',
   props:{
     text:String
   },
   data(){
     return {
       gqg:'123456',
     }
   },
   methods:{
      onClick(){
        //子组件需要使用this.$emit 将子组件的事件进行上级传递,onClick是使用的方法名可以自定义,this.gqg则是传递的参数
        this.$emit('onClick',this.gqg);
      }
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
  }
</style>