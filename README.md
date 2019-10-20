Perform addition, subtraction, multiplication and division operations precisely using javascript

### Why

```js
0.1 + 0.2 = 0.30000000000000004
1.0 - 0.9 = 0.09999999999999998
0.105.toFixed(2) = 0.1 // not 0.11
```
[文章《JS中如何便捷地修复精度误差？》](https://juejin.im/post/5dac0ebbe51d45252777a0df)
### Install

```
npm install fix-precision --save
```

### Methods

```js
const FP = require('fix-precision');
FP(num)         // fix precision for a result
FP.add(num1, num2)   // addition, num + num2
FP.sub(num1, num2)  // subtraction, num1 - num2
FP.mul(num1, num2)  // multiplication, num1 * num2
FP.div(num1, num2) // division, num1 / num2
FP.sum(num1, num2, num3, ...)  // sum, num + num2 + num3 ...
```

### Usage

```js
import NP from 'number-precision'
FP(0.09999999999999998); // = 0.1
FP.add(0.1, 0.2);             // = 0.3, not 0.30000000000000004
FP.add(2.3, 2.4);             // = 4.7, not 4.699999999999999
FP.sub(1.0, 0.9);            // = 0.1, not 0.09999999999999998
FP.mul(3, 0.3);              // = 0.9, not 0.8999999999999999
FP.mul(0.362, 100);          // = 36.2, not 36.199999999999996
FP.div(1.21, 1.1);          // = 1.1, not 1.0999999999999999
```
### benchmark
Plus benchmark:
plus#number-precision x 112,875 ops/sec ±4.03% (80 runs sampled)
plus#acc x 303,780 ops/sec ±2.94% (76 runs sampled)
plus#fix-precision x 1,396,419 ops/sec ±2.77% (84 runs sampled)
plus#Decimal x 208,595 ops/sec ±3.42% (85 runs sampled)
plus#mathjs x 74,412 ops/sec ±6.01% (82 runs sampled)
Fastest is plus#fix-precision

Minus benchmark:
minus#number-precision x 135,535 ops/sec ±3.13% (85 runs sampled)
minus#acc x 423,713 ops/sec ±1.73% (88 runs sampled)
minus#fix-precision x 1,494,264 ops/sec ±3.55% (83 runs sampled)
minus#Decimal x 414,875 ops/sec ±1.35% (92 runs sampled)
minus#mathjs x 79,988 ops/sec ±2.77% (78 runs sampled)
Fastest is minus#fix-precision

Times benchmark:
times#number-precision x 232,079 ops/sec ±3.45% (82 runs sampled)
times#acc x 386,434 ops/sec ±2.19% (87 runs sampled)
times#fix-precision x 1,509,610 ops/sec ±2.69% (81 runs sampled)
times#Decimal x 205,473 ops/sec ±2.95% (80 runs sampled)
times#mathjs x 69,118 ops/sec ±3.62% (80 runs sampled)
Fastest is times#fix-precision

Divide benchmark:
divide#number-precision x 182,798 ops/sec ±2.84% (83 runs sampled)
divide#acc x 409,484 ops/sec ±2.84% (82 runs sampled)
divide#fix-precision x 1,553,216 ops/sec ±1.10% (90 runs sampled)
divide#Decimal x 297,166 ops/sec ±3.31% (85 runs sampled)
divide#mathjs x 59,992 ops/sec ±3.07% (81 runs sampled)
Fastest is divide#fix-precision



### License
MIT