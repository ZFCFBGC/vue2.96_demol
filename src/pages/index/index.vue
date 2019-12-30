<template>
  <div class="index">
    <!-- <div class="head">demol页面</div> -->
    <Header title="demol页面" leftText="返回" rightText="首页" :leftIcon="leftIcon"></Header>
    <div style="height:60px"></div>
    <Button @onClick="goPath" type="info" :text="text"></Button>
    <!-- <Overlay><div class="mwc">加载中...</div></Overlay> -->
  </div>
</template>
<script>

export default {
  components: {
  },
  data(){
    return {
      gqg:'',
      text:'请点击',
      type:'default',
      color:'#07c160',
      leftIcon:''
    }
  },
  mounted() {
    console.log('tools',tools.checkID('360313199105174016'))
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
    .mwc{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%)
    }
  }
</style>