// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import gqg from "@/api/api.js";
import tools from "./tools.js";

// element-ui引入
import {
  Pagination,
  Input,
  Button,
  Tree,
  Icon,
  Table,
  TableColumn,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Pagination);
Vue.use(Input);
Vue.use(Button);
Vue.use(Tree);
Vue.use(Icon);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.config.productionTip = false;
//mport Button from "@/components/base/button/index.js";
//Vue.use(Button);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
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
