import Vue from "vue";
import showInfoVue from "./main.vue";
const ccbShowInfoConstructor = Vue.extend(showInfoVue);
const ccbShowInfo = function() {};
var instance = new ccbShowInfoConstructor({
  el: document.createElement("div")
});
ccbShowInfo.show = options => {
  console.log("详细", instance);
  document.body.appendChild(instance.$el);
  instance.show = true;
  if (options != undefined) {
    if (options.title != undefined) {
      instance.title = options.title;
    } else {
      instance.title = "";
    }
    if (options.type != undefined) {
      instance.type = options.type;
    } else {
      instance.type = "";
    }
    if (options.content != undefined) {
      instance.content = options.content;
    } else {
      instance.content = "";
    }
    if (options.errorTitle != undefined) {
      instance.errorTitle = options.errorTitle;
    } else {
      instance.errorTitle = "参考码";
    }
    if (options.errorCode != undefined) {
      instance.errorCode = options.errorCode;
    } else {
      instance.errorCode = "";
    }
    if (options.btnList != undefined) {
      instance.items = options.btnList;
    } else {
      instance.items = [{ text: "确定", active: true }];
    }
    if (options.contentColor != undefined) {
      instance.contentColor = options.contentColor;
    } else {
      instance.contentColor = "#333";
    }
    if (options.center != undefined) {
      instance.center = options.center;
    } else {
      instance.center = false;
    }
    //成功回调
    instance.btnClick = function(index) {
      instance.show = false;
      if (typeof options.success == "function") {
        options.success({
          detail: {
            index: index
          }
        });
      }
      if (typeof options.complete == "function") {
        options.complete({
          detail: {
            index: index
          }
        });
      }
    };
  }
};
ccbShowInfo.hide = () => {
  instance.show = false;
};
export default ccbShowInfo;
