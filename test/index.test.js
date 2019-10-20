const FP = require("../");

describe("fixPrecision", () => {
  test("fixPrecision", () => {
    expect(FP(0.09999999999999998)).toBe(0.1);
  });

  test("add", () => {
    expect(0.1 + 0.2).not.toBe(0.3);
    const ans = FP.add(0.1, 0.2);
    expect(ans).toBe(0.3);
    expect(FP.add(0.1, 0.2) === 0.3).toBeTruthy();
    expect(FP.add(2.3, 2.4) === 4.7).toBeTruthy();
    expect(FP.add(-1.6, -1) === -2.6).toBeTruthy();
    expect(FP.add(-2.0, 63) === 61).toBeTruthy();
    expect(FP.add(-3, 7) === 4).toBeTruthy();
    expect(FP.add(-221, 38) === -183).toBeTruthy();
    expect(FP.add(-1, 0) === -1).toBeTruthy();
    expect(FP.add(2.018, 0.001) === 2.019).toBeTruthy();
    expect(FP.add(1.3224e10, 1.3224e3)).toBe(13224001322.4);
    expect(FP.add(4641.93, -4641.63)).toBe(0.3);
    expect(FP.add(1000.9, -1000.6)).toBe(0.3);
  });

  test("sub", () => {
    expect(2.01-0.01).not.toBe(2);
    const ans = FP.sub(2.01, 0.01);
    expect(ans).toBe(2);
    expect(FP.sub(0.07, 0.01) === 0.06).toBeTruthy();
    expect(FP.sub(0.7, 0.1) === 0.6).toBeTruthy();
    expect(FP.sub(1.0, 0.9) === 0.1).toBeTruthy();
    expect(FP.sub(1, 0) === 1).toBeTruthy();
    expect(FP.sub(1, -0) === 1).toBeTruthy();
    expect(FP.sub(-1, 0) === -1).toBeTruthy();
    expect(FP.sub(-1, -0) === -1).toBeTruthy();
    expect(FP.sub(1, 22) === -21).toBeTruthy();
    expect(FP.sub(8893568.39710001, -0.001)).toBe(8893568.39810001);
    expect(FP.sub(-0.001, 8893568.39710001)).toBe(-8893568.39810001);
    expect(FP.sub(105468873, 0) === 105468873).toBeTruthy();
  
    expect(FP.sub(1.23e5, 10) === 122990).toBeTruthy();
    expect(FP.sub(1.23e-5, 1.0023) === -1.0022877).toBeTruthy();
    expect(FP.sub(1.3224e10, 21) === 13223999979).toBeTruthy();
    expect(FP.sub(1.3224e10, 1.3224e3) === 13223998677.6).toBeTruthy();
    expect(FP.sub(4641.93, 4641.63)).toBe(0.3);
  });

  
  test("mul", () => {
    expect(0.1 * 0.2).not.toBe(0.02);
    const ans = FP.mul(0.1, 0.2);
    expect(ans).toBe(0.02);
    expect(FP.mul(0.07, 100) === 7).toBeTruthy();
    expect(FP.mul(0.7, 0.1) === 0.07).toBeTruthy();
    expect(FP.mul(3, 0.3) === 0.9).toBeTruthy();
    expect(FP.mul(118762317358.75, 1e-8)).toBe(1187.6231735875);
    expect(FP.mul(0.362, 100) === 36.2).toBeTruthy();
    expect(FP.mul(1.1, 1.1) === 1.21).toBeTruthy();
    expect(FP.mul(2.018, 1000)).toBe(2018);
    expect(FP.mul(5.2, -3.8461538461538462) === -20).toBeTruthy();
    expect(FP.mul(1.22, -1.639344262295082) === -2).toBeTruthy();
    expect(FP.mul(2.5, -0.92) === -2.3).toBeTruthy();
    expect(FP.mul(-2.2, 0.6363636363636364) === -1.4).toBeTruthy();
    expect(FP.mul(8.0, -0.3625) === -2.9).toBeTruthy();
    expect(FP.mul(6.6, 0.30303030303030304) === 2).toBeTruthy();
    expect(FP.mul(10.0, -0.8) === -8).toBeTruthy();
    expect(FP.mul(-1.1, -7.272727272727273) === 8).toBeTruthy();
  
    expect(FP.mul(-1.23e4, 20) === -246000).toBeTruthy();
  
  });

  test("div", () => {
    expect(2.01/0.01).not.toBe(201);
    const ans = FP.div(2.01, 0.01);
    expect(ans).toBe(201);
    expect(FP.div(1.21, 1.1) === 1.1).toBeTruthy();
    expect(FP.div(4750.49269435, 4) === 1187.6231735875).toBeTruthy();
    expect(FP.div(0.9, 3) === 0.3).toBeTruthy();
    expect(FP.div(36.2, 0.362) === 100).toBeTruthy();
    expect(FP.div(-20, 5.2)).toBe(-3.84615384615385); // 无限循环
    expect(FP.div(-2.3, 2.5) === -0.92).toBeTruthy();
    expect(FP.div(-2.9, 8.0) === -0.3625).toBeTruthy();
    expect(FP.div(-8, 10.0) === -0.8).toBeTruthy();
    expect(FP.div(8, -1.1)).toBe(-7.27272727272727);
  
    expect(FP.div(-1.23e4, 20) === -615).toBeTruthy();
  });

  test(" ((2.3 * 2018.1) + 0.1+ 0.2) - 2.3 * 2018.1 -0.1-0.2", () => {
    expect(FP.sum(FP.mul(2.3, 2018.1), 0.1, 0.2, -FP.mul(2.3, 2018.1), -0.1, -0.2)).toBe(0);
  });

});
