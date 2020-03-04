<template>
  <div class="index">
    <!-- <div class="head">demol页面</div> -->
    <!-- <Header title="demol页面" leftText="返回" rightText="首页" :leftIcon="leftIcon"></Header> -->
    <!-- <div style="height:60px"></div> -->
    <!-- <Button @onClick="goPath" type="info" :text="text"></Button> -->
    <!-- <Overlay :show="OverlayShow"><div class="mwc"><Loading :loading="OverlayShow"><div style="margin-top:80px">{{loadingText}}</div></Loading></div></Overlay> -->
    <!-- <Popop position="bottom" :show="false">内容</Popop> -->
    <!-- <Cell lable="左边" value="右边" decoration="描述" :is_link="false" url="/details"></Cell> -->
    <!-- <Page :page_count="page_count" :currentPage="currentPage" @prevClick="getPage" @nextClick="getPage" @Change="getPage"></Page> -->
    <TabNav :items="tabbars"></TabNav>
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
      leftIcon:'',
      loadingText:"加载中",
      OverlayShow:false,
      page_count:'10',
      currentPage:'1',
      tabbars:[
          {
              name: "index",
              title: "首页",
              normal: require("@/assets/img/ico_home_tab.png"),
              active: require("@/assets/img/ico_home_tab_press.png")
          },
          {
              name: "serviceHall",
              title: "服务大厅",
              normal: require("@/assets/img/ico_service_tab.png"),
              active: require("@/assets/img/ico_service_tab_press.png")
          },
          {
              name: "mine",
              title: "个人中心",
              normal: require("@/assets/img/ico_mine_tab.png"),
              active: require("@/assets/img/ico_mine_tab_press.png")
          },
          {
            name:'shop',
            title:'商城',
            normal:require("@/assets/img/ico_mine_tab.png"),
            active:require("@/assets/img/ico_mine_tab_press.png")
          }
      ]
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
    getPage(e){
      console.log('事件触发了吗')
      console.log('接受父组件传过来的参数',e)
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
      transform: translate(-50%,-50%);
      color:#fff;
    }
  }
</style>