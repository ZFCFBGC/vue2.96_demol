import ccbShowInfo from "./showInfo/main.js";

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




export default gqg;