// 适合处理长度不超过15个数字的场景。（15个数字即整数的位数加上小数的位数不超过15位，
// 如：1234567890.12345 或者 12345.0123456789，之类）
/**
 *修复精度
 *
 * @param {number} num 需修复的浮点数
 * @param {number|undefined} intLength 计算前入参的整数长度部分，用于动态调整精度
 * @returns
 */
function fixPrecision(num, intLength) {
  // 根据整数长度部分，动态调整精度
  return +(+num).toFixed(15 - Math.max(intLength || 0, getIntLength(num)));
}
/**
 * 获取整数部分数字长度
 *
 * @param {number} num
 * @returns {number}
 */
function getIntLength(num) {
  var pointIndex = ("" + num).indexOf(".");
  return num < 0 ? pointIndex - 1 : pointIndex;
}
function getMaxIL(a, b) {
  return Math.max(getIntLength(a), getIntLength(b));
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
    return fixPrecision(a + b, getMaxIL(a, b));
  },
  sub: function(a, b) {
    return fixPrecision(a - b, getMaxIL(a, b));
  },
  mul: function(a, b) { // 乘法和除法不需要动态调整精度，因为操作的结果精确的位数比输入参数都要高。如0.1*0.02=0.002，如果输入精确到2位小数的话，输出可以精确到3位小数。
    return fixPrecision(a * b);
  },
  div: function(a, b) {
    return fixPrecision(a / b);
  }
});
module.exports = fixPrecision;
