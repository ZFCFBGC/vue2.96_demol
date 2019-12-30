import ccbShowInfo from "./showInfo/main.js";
import ToastInfo from "./tips/tips";
/**
 * 为防止页面打印gqg方法集合
 * const gqg为一个function
 */
const gqg = () => {};


gqg.showInfo = (options) => {
  ccbShowInfo.show(options);
}
gqg.hideInfo = (options) => {
  ccbShowInfo.hide(options);
}
gqg.tips = (options) => {
  ToastInfo.show(options);
  //三秒后隐藏
  setTimeout(() => {
    ToastInfo.hide(options);
  }, 3000);
  
}


export default gqg;