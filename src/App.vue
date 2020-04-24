<template>
  <div id="app">
    <div class="header">
      <el-select
        v-model="languageVal"
        @change="switchLanguage(languageVal)"
        class="el-select"
      >
        <el-option
          v-for="item in language"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      languageVal: this.$i18n.locale, //为了把下拉框的默认值和全局变量的值一致，以此实现载入页面时显示的语言和数据配置一致
      language: [
        {
          value: "en-US",
          label: "English"
        },
        {
          value: "zh-CN",
          label: "中文简体"
        },
        {
          value: "zh-TW",
          label: "中文繁體"
        }
      ]
    };
  },
  methods: {
    switchLanguage(value) {
      console.log('语言选择',value)
      if (value == "zh-CN") {
        this.$i18n.locale = "zh-CN";
      } else if (value == "en-US") {
        this.$i18n.locale = "en-US";
      } else if (value == "zh-TW") {
        this.$i18n.locale = "zh-TW";
      }
      //在选择了显示的语言后，将配置保存到Cookie中
      this.$cookie.set(
        "DefaultLanguage",
        value //
      );
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
