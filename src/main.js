// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import gqg from "@/api/api.js";
import tools from "./tools.js";
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import twLocale from 'element-ui/lib/locale/lang/zh-TW'
import ElementUI from 'element-ui';
import Cookies from 'js-cookie'
import "element-ui/lib/theme-chalk/index.css";

Vue.prototype.$cookie = Cookies
Vue.use(Cookies)
Vue.use(VueI18n)
Vue.use(ElementUI, { zhLocale })
// InitLanguage  这里引入了vue-cookie,是为了将用户选择的语言存储到Cookie里，在以后访问站点不需要重新选择语言
function InitLanguage() {
  console.log('cookie',Cookies)
  return Cookies.get('DefaultLanguage') == null ? 'zh-CN' : Cookies.get('DefaultLanguage');
}

const i18n = new VueI18n({
  locale:  InitLanguage(), // 语言标识,默认汉语,先去cookie查找，如果存在并有效，cookie值即为默认语言类型；否则默认为中文简体
  messages: {
    'en-US': Object.assign(require("../static/lang/en"),enLocale),
    'zh-CN': Object.assign(require("../static/lang/zh-CN"),zhLocale),
    'zh-TW': Object.assign(require("../static/lang/zh-TW"),twLocale)
  }
});
locale.i18n((key, value) => i18n.t(key, value))
// element-ui引入

// Vue.use(Pagination);
// Vue.use(Input);
// Vue.use(Button);
// Vue.use(Tree);
// Vue.use(Icon);
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(Select);
// Vue.use(Option);
// Vue.use(OptionGroup);
Vue.config.productionTip = false;
//mport Button from "@/components/base/button/index.js";
//Vue.use(Button);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  i18n,
  components: { App },
  template: "<App/>",
  beforeCreate() {
    window.rootVue = this;
    window.gqg = gqg;
    window.tools = tools;
    window.ccbzhrmghgwswswwsMapList_createMapContext_ccbzhrmghgwswswwsMapList = [];
    window.ccbAutoGetClassName = function(ele, classn) {
      if (!document.getElementsByClassName) {
        var list = ele.getElementsByTagName("*");
        var temp = []; //创建临时数组
        for (var i = 0; i < list.length; i++) {
          if (list[i].className == classn) {
            temp.push(list[i]);
          }
        }
        return temp; //返回给函数
      } else {
        return ele.getElementsByClassName(classn);
      }
    };
    window.ccb_handle_arr = function(arr) {
      let newArr = arr;
      return newArr.concat([]);
    };
  }
});
