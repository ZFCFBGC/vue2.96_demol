<template>
  <div class="details">
    <div>测试API</div>
    <ccb-confirm></ccb-confirm>
    <toast></toast>
  </div>
</template>
<script>
import ccbConfirm from "@/api/showInfo/main.vue";
import toast from "@/api/tips/tips.vue"
export default {
  components: {
    ccbConfirm,
    toast
  },
  data() {
    return {
      text:'请求超时，请重试'
    };
  },
  mounted() {
    
    // gqg.showInfo({
    //   title: "提示",
    //   content: "验证码发送失败，请重试",
    //   errorCode: "00000111",
    //   btnList:[{ text: "确定", active: true },{text:"取消",active:false}],
    //   success:function(index){
    //     console.log('111',index)
    //   },
    // });
    gqg.tips({
      title:'提示',
      text:'请求失败请重试'
    })
  }
};
</script>