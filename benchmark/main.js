const NP = require("number-precision");
const Decimal = require("decimal.js");
const mathjs = require("mathjs");
const Benchmark = require('benchmark');
const fs = require('fs');
const path = require('path');

const acc = require("../other/acc");
const index = require("../");

const  { create, all } = mathjs;
const math = create(all);
math.config({
number: 'BigNumber',      // Default type of number:
                            // 'number' (default), 'BigNumber', or 'Fraction'
precision: 64             // Number of significant digits for BigNumbers
});

const writeStream = fs.createWriteStream(path.join(__dirname, './result.txt'), {
  flags:'w', //文件的打开模式
  mode:0o666, //文件的权限设置
  encoding:'utf8', //写入文件的字符的编码
  highWaterMark:3, //最高水位线
  start:0 , //写入文件的起始索引位置        
  autoClose:true, //是否自动关闭文档
});
let count = 0;
function writeEnd(ret){
  try{
    count++;
    writeStream.write(ret);
    if(count >= 4){
      writeStream.end();
    }
  }catch(e){
    console.error(e.message, e.stack);
  }
}
const suitePlus = new Benchmark.Suite;
const resultPlus = ['Plus benchmark:'];
// add tests
suitePlus.add('plus#number-precision', function() {
    NP.plus(0.1, 0.2);
})
.add('plus#acc', function() {
    acc.add(0.1, 0.2);
})
.add('plus#fix-precision', function() {
    index.add(0.1, 0.2);
})
.add('plus#Decimal', function() {
    Decimal.add(0.1, 0.2).toNumber();
})
.add('plus#mathjs', function() {
  math.number(math.evaluate('0.1 + 0.2'));
})
// add listeners
.on('cycle', function(event) {
  resultPlus.push(String(event.target));
})
.on('complete', function() {
  resultPlus.push('Fastest is ' + this.filter('fastest').map('name'));
  const ret = resultPlus.join('\n')+'\n\n';
  console.log(ret);
  writeEnd(ret);
})
// run async
.run({ 'async': true });

const suiteMinus = new Benchmark.Suite;
const resultMinus = ['Minus benchmark:'];
// add tests
suiteMinus.add('minus#number-precision', function() {
    NP.minus(2.01, 0.01);
})
.add('minus#acc', function() {
    acc.sub(2.01, 0.01);
})
.add('minus#fix-precision', function() {
    index.sub(2.01, 0.01);
})
.add('minus#Decimal', function() {
    Decimal.sub(2.01, 0.01).toNumber();
})
.add('minus#mathjs', function() {
  math.number(math.evaluate('2.01 - 0.01'));
})
// add listeners
.on('cycle', function(event) {
  resultMinus.push(String(event.target));
})
.on('complete', function() {
  resultMinus.push('Fastest is ' + this.filter('fastest').map('name'));
  const ret = resultMinus.join('\n')+'\n\n';
  console.log(ret);
  writeEnd(ret);
})
// run async
.run({ 'async': true });



const suiteTimes = new Benchmark.Suite;
const resultTimes = ['Times benchmark:'];
// add tests
suiteTimes.add('times#number-precision', function() {
  NP.times(0.1, 0.2);
})
.add('times#acc', function() {
  acc.mul(0.1, 0.2);
})
.add('times#fix-precision', function() {
  index.mul(0.1, 0.2);
})
.add('times#Decimal', function() {
  Decimal.mul(0.1, 0.2).toNumber();
})
.add('times#mathjs', function() {
  math.number(math.evaluate('0.1 * 0.2'));
})
// add listeners
.on('cycle', function(event) {
  resultTimes.push(String(event.target));
})
.on('complete', function() {
  resultTimes.push('Fastest is ' + this.filter('fastest').map('name'));
  const ret = resultTimes.join('\n')+'\n\n';
  console.log(ret);
  writeEnd(ret);
})
// run async
.run({ 'async': true });


const suiteDivide = new Benchmark.Suite;
const resultDivide = ['Divide benchmark:'];
// add tests
suiteDivide.add('divide#number-precision', function() {
  NP.divide(2.01, 0.01);
})
.add('divide#acc', function() {
  acc.div(2.01, 0.01);
})
.add('divide#fix-precision', function() {
  index.div(2.01, 0.01);
})
.add('divide#Decimal', function() {
  Decimal.div(2.01, 0.01).toNumber();
})
.add('divide#mathjs', function() {
  math.number(math.evaluate('2.01/0.01'));
})
// add listeners
.on('cycle', function(event) {
  resultDivide.push(String(event.target));
})
.on('complete', function() {
  resultDivide.push('Fastest is ' + this.filter('fastest').map('name'));
  const ret = resultDivide.join('\n')+'\n\n';
  console.log(ret);
  writeEnd(ret);
})
// run async
.run({ 'async': true });