
// 适合处理长度不超过15个数字的场景
/**
 *修复精度
 *
 * @param {number} num 需修复的浮点数
 * @param {number|undefined} di 计算前入参的整数长度部分，用于动态调整精度
 * @returns
 */
function fixPrecision(num, di) {
  var pointIndex = Math.max(di || 0, getDotIndex(num));
  if (num < 0) {
    pointIndex--;
  }
  var ans = (+num).toFixed(15 - pointIndex); // 根据整数长度部分，动态调整精度
  return parseFloat(ans);
}
/**
 * 获取小数点位置
 *
 * @param {number} num
 * @returns {number}
 */
function getDotIndex(num) {
  return ("" + num).indexOf(".");
}
function getMaxDI(a, b) {
  return Math.max(getDotIndex(a), getDotIndex(b));
}

function process(fun, args) {
  var len = args.length;
  var ans = args[0];
  for (var i = 1; i < len; i++) {
    ans = fun(ans, args[i]);
  }
  return ans;
}

function sum() {
  return process(fixPrecision.add, arguments);
}

Object.assign(fixPrecision, {
  sum: sum,
  add: function(a, b) {
    return fixPrecision(a + b, getMaxDI(a, b));
  },
  sub: function(a, b) {
    return fixPrecision(a - b, getMaxDI(a, b));
  },
  mul: function(a, b) { // 乘法和除法不需要动态调整精度，因为操作的结果精确的位数比输入参数都要高。如0.1*0.02=0.002，如果输入精确到2位小数的话，输出可以精确到3位小数。
    return fixPrecision(a * b);
  },
  div: function(a, b) {
    return fixPrecision(a / b);
  }
});
module.exports = fixPrecision;
