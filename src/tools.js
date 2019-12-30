var tools = {};
//注册全局js

/**
 * 日期转换(中文)
 * @param {*Date} date 传入时间对象 ymd symbol 年月日连接符号
 * @param {*Boolean} ymd  是否只显示年月日
 * @param {*String} symbol  年月日连接符号
 */
tools.formatTime = function(date, ymd, symbol, chinese) {
  var _symbol = "-";
  if (symbol) {
    _symbol = symbol;
  }
  var formatNumber = n => {
    n = n.toString();
    return n[1] ? n : "0" + n;
  };
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  if (ymd) {
    if (chinese) {
      return year + "年" + month + "月" + day + "日";
    } else {
      return [year, month, day].map(formatNumber).join(_symbol);
    }
  } else {
    return (
      [year, month, day].map(formatNumber).join(_symbol) +
      " " +
      [hour, minute, second].map(formatNumber).join(":")
    );
  }
};
/**
 * 日期转换英文版
 * @param {*Date} date 传入时间对象 ymd symbol 年月日连接符号
 * @param {*Boolean} ymd  是否只显示年月日
 * @param {*String} symbol  年月日连接符号
 */
tools.formatEnglishTime = date => {
  var formatNumber = n => {
    n = n.toString();
    return n[1] ? n : "0" + n;
  };
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var englishMonth;
  switch (month) {
    case 1:
      englishMonth = "Jan";
      break;
    case 2:
      englishMonth = "Feb";
      break;
    case 3:
      englishMonth = "Mar";
      break;
    case 4:
      englishMonth = "Apr";
      break;
    case 5:
      englishMonth = "May";
      break;
    case 6:
      englishMonth = "June";
      break;
    case 7:
      englishMonth = "July";
      break;
    case 8:
      englishMonth = "Aug";
      break;
    case 9:
      englishMonth = "Sep";
      break;
    case 10:
      englishMonth = "Oct";
      break;
    case 11:
      englishMonth = "Nov";
      break;
    case 12:
      englishMonth = "Dec";
      break;
    default:
      break;
  }
  var day = date.getDate();
  var week = date.getDay();
  var englishWeek;
  switch (week) {
    case 1:
      englishWeek = "Monday";
      break;
    case 2:
      englishWeek = "Tuesday";
      break;
    case 3:
      englishWeek = "Wednesday";
      break;
    case 4:
      englishWeek = "Thursday";
      break;
    case 5:
      englishWeek = "Friday";
      break;
    case 6:
      englishWeek = "Saturday";
      break;
    case 0:
      englishWeek = "Sunday";
      break;

    default:
      break;
  }
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var englishDay;
  if (hour >= 0 && hour <= 12) {
    englishDay = "AM";
  } else {
    englishDay = "PM";
  }
  return (
    [hour, minute, second].map(formatNumber).join(":") +
    " " +
    englishDay +
    " on" +
    " " +
    englishWeek +
    "," +
    " " +
    formatNumber(day) +
    " " +
    englishMonth +
    " " +
    year
  );
};
/**
 * 判断机型
 * retrue 是否加顶部适配div
 */
tools.getSystem = () => {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isiOS) {
    return true;
  } else {
    return false;
  }
};
/**
 * 电话号码正则
 * @param {*String} e 传入号码
 */
tools.phonevalid = e => {
  var pattern = /^1[34578]\d{9}$/;
  return pattern.test(e);
};
/**
 * 只能输入数字
 * @param {*String} value  输入
 */
tools.validNumber = value => {
  return value.replace(/[^\d]/g, "");
};
/**
 * 只能输入字母
 * @param {*String} value  输入
 */
tools.validLetter = value => {
  var part = new RegExp("^[a-zA-Z]+$");
  return part.test(value);
};
/**
 * 去空
 * @param {*String} e 输入
 */
tools.trimvalid = e => {
  return e.replace(/(^\s*)|(\s*$)/g, "");
};
/**
 * 计算2点直线距离
 * @param {*Number} lat1
 * @param {*Number} lng1
 * @param {*Number} lat2
 * @param {*Number} lng2
 */
tools.getDistance = (lat1, lng1, lat2, lng2) => {
  var rad1 = (lat1 * Math.PI) / 180.0;
  var rad2 = (lat2 * Math.PI) / 180.0;
  var a = rad1 - rad2;
  var b = (lng1 * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0;
  var r = 6378137;
  return Math.ceil(
    r *
      2 *
      Math.asin(
        Math.sqrt(
          Math.pow(Math.sin(a / 2), 2) +
            Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)
        )
      )
  );
};
/**
 * 金额格式转换
 * @param {*number} number 传入金额
 * @param {*number} decimals  保留几位小数
 * @param {*string} dec_point  小数点符号
 * @param {*string} thousands_sep  千分位符号
 */
tools.number_format1 = (number, decimals, dec_point, thousands_sep) => {
  number = (number + "").replace(/[^0-9+-Ee.]/g, "");
  var n = !isFinite(+number) ? 0 : +number;
  var prec = !isFinite(+decimals) ? 2 : Math.abs(decimals);
  var sep = typeof thousands_sep === "undefined" ? "," : thousands_sep;
  var dec = typeof dec_point === "undefined" ? "." : dec_point;
  var s = "";
  var toFixedFix = function(n, prec) {
    var k = Math.pow(10, prec);
    return "" + Math.ceil(n * k) / k;
  };

  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  var re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, "$1" + sep + "$2");
  }

  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
};
/**
 * 将金额进行千位分隔
 * @param {num} num 金额
 */
tools.number_format = num => {
  num = num.toString().replace(/\$|\,/g, "");
  if (isNaN(num)) {
    num = "0";
  }
  var sign = num == (num = Math.abs(num));
  num = Math.floor(num * 100 + 0.50000000001);
  var cents = num % 100;
  num = Math.floor(num / 100)
    .toString()
    .replace(/\d+/, function(n) {
      // 先提取整数部分
      return n.replace(/(\d)(?=(\d{3})+$)/g, function($1) {
        return $1 + ",";
      });
    });
  if (cents < 10) {
    cents = "0" + cents;
  }
  return (sign ? "" : "-") + num + "." + cents;
};
/**
 * 邮箱正则
 * @param {*String} val 传入号码
 */
tools.emailvalid = val => {
  var reg = new RegExp(
    "^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"
  );
  return reg.test(val);
};
/**
 * 身份证正则(简单)
 * @param {*String} val 传入号码
 */
tools.cardID = val => {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(val);
};
/**
 * 身份证正则(复杂)
 * @param {*String} val 传入号码
 */
//检查前六位
var checkProv = function(val) {
  var pattern = /^[1-9][0-9]/;
  var provs = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江 ",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北 ",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏 ",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门"
  };
  if (pattern.test(val)) {
    if (provs[val]) {
      return true;
    }
  }
  return false;
};
//检查生日
var checkDate = function(val) {
  var pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
  if (pattern.test(val)) {
    var year = val.substring(0, 4);
    var month = val.substring(4, 6);
    var date = val.substring(6, 8);
    var date2 = new Date(year + "-" + month + "-" + date);
    if (date2 && date2.getMonth() == parseInt(month) - 1) {
      return true;
    }
  }
  return false;
};
//检查其他
var checkCode = function(val) {
  var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  var parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
  var code = val.substring(17);
  if (p.test(val)) {
    var sum = 0;
    for (var i = 0; i < 17; i++) {
      sum += val[i] * factor[i];
    }
    if (parity[sum % 11] == code.toUpperCase()) {
      return true;
    }
  }
  return false;
};
tools.checkID = function(val) {
  if (checkCode(val)) {
    var date = val.substring(6, 14);
    if (checkDate(date)) {
      if (checkProv(val.substring(0, 2))) {
        return true;
      }
    }
  }
  return false;
};
export default tools;
