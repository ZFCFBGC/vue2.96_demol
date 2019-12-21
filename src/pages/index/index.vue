<template>
  <div class="index">
    <div class="head">demol页面</div>
    <Button @onClick="goPath">国企更1</Button>
  </div>
</template>
<script>

export default {
  components: {
  },
  data(){
    return {
      gqg:''
    }
  },
  mounted() {
    
  },
  methods:{
    goPath(e){
      console.log('事件触发')
      console.log('接收父组件传递过来的参数',e)
    }
  }
}
</script>
<style lang="less" scoped>
  .index{
    .head{
      font-size:32px;
    }
  }
</style>