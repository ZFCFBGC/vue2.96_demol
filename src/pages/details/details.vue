<template>
  <div class="details">
    <div>测试API</div>
    <ccb-confirm></ccb-confirm>
  </div>
</template>
<script>
import ccbConfirm from "@/api/showInfo/main.vue";
export default {
  components: {
    ccbConfirm
  },
  data() {
    return {
     
    };
  },
  mounted() {
    gqg.showInfo({
      title: "提示",
      content: "验证码发送失败，请重试",
      errorCode: "00000111"
    });
  }
};
</script>