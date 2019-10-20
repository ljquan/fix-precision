const index = require("../");

describe("matchjs", () => {
  test("0.1 + 0.2", () => {
    expect(0.1 + 0.2).not.toBe(0.3);
    const ans = index.add(0.1, 0.2);
    expect(ans).toBe(0.3);
    expect(index.add(0.1, 0.2) === 0.3).toBeTruthy();
    expect(index.add(2.3, 2.4) === 4.7).toBeTruthy();
    expect(index.add(-1.6, -1) === -2.6).toBeTruthy();
    expect(index.add(-2.0, 63) === 61).toBeTruthy();
    expect(index.add(-3, 7) === 4).toBeTruthy();
    expect(index.add(-221, 38) === -183).toBeTruthy();
    expect(index.add(-1, 0) === -1).toBeTruthy();
    expect(index.add(2.018, 0.001) === 2.019).toBeTruthy();
    expect(index.add(1.3224e10, 1.3224e3)).toBe(13224001322.4);
    expect(index.add(4641.93, -4641.63)).toBe(0.3);
  });

  test("2.01-0.01", () => {
    expect(2.01-0.01).not.toBe(2);
    const ans = index.sub(2.01, 0.01);
    expect(ans).toBe(2);
    expect(index.sub(0.07, 0.01) === 0.06).toBeTruthy();
    expect(index.sub(0.7, 0.1) === 0.6).toBeTruthy();
    expect(index.sub(1.0, 0.9) === 0.1).toBeTruthy();
    expect(index.sub(1, 0) === 1).toBeTruthy();
    expect(index.sub(1, -0) === 1).toBeTruthy();
    expect(index.sub(-1, 0) === -1).toBeTruthy();
    expect(index.sub(-1, -0) === -1).toBeTruthy();
    expect(index.sub(1, 22) === -21).toBeTruthy();
    expect(index.sub(8893568.39710001, -0.001)).toBe(8893568.39810001);
    expect(index.sub(-0.001, 8893568.39710001)).toBe(-8893568.39810001);
    expect(index.sub(105468873, 0) === 105468873).toBeTruthy();
  
    expect(index.sub(1.23e5, 10) === 122990).toBeTruthy();
    expect(index.sub(1.23e-5, 1.0023) === -1.0022877).toBeTruthy();
    expect(index.sub(1.3224e10, 21) === 13223999979).toBeTruthy();
    expect(index.sub(1.3224e10, 1.3224e3) === 13223998677.6).toBeTruthy();
    expect(index.sub(4641.93, 4641.63)).toBe(0.3);
  });

  
  test("0.1 * 0.2", () => {
    expect(0.1 * 0.2).not.toBe(0.02);
    const ans = index.mul(0.1, 0.2);
    expect(ans).toBe(0.02);
    expect(index.mul(0.07, 100) === 7).toBeTruthy();
    expect(index.mul(0.7, 0.1) === 0.07).toBeTruthy();
    expect(index.mul(3, 0.3) === 0.9).toBeTruthy();
    expect(index.mul(118762317358.75, 1e-8)).toBe(1187.6231735875);
    expect(index.mul(0.362, 100) === 36.2).toBeTruthy();
    expect(index.mul(1.1, 1.1) === 1.21).toBeTruthy();
    expect(index.mul(2.018, 1000)).toBe(2018);
    expect(index.mul(5.2, -3.8461538461538462) === -20).toBeTruthy();
    expect(index.mul(1.22, -1.639344262295082) === -2).toBeTruthy();
    expect(index.mul(2.5, -0.92) === -2.3).toBeTruthy();
    expect(index.mul(-2.2, 0.6363636363636364) === -1.4).toBeTruthy();
    expect(index.mul(8.0, -0.3625) === -2.9).toBeTruthy();
    expect(index.mul(6.6, 0.30303030303030304) === 2).toBeTruthy();
    expect(index.mul(10.0, -0.8) === -8).toBeTruthy();
    expect(index.mul(-1.1, -7.272727272727273) === 8).toBeTruthy();
  
    expect(index.mul(-1.23e4, 20) === -246000).toBeTruthy();
  
  });

  test("2.01/0.01", () => {
    expect(2.01/0.01).not.toBe(201);
    const ans = index.div(2.01, 0.01);
    expect(ans).toBe(201);
    expect(index.div(1.21, 1.1) === 1.1).toBeTruthy();
    expect(index.div(4750.49269435, 4) === 1187.6231735875).toBeTruthy();
    expect(index.div(0.9, 3) === 0.3).toBeTruthy();
    expect(index.div(36.2, 0.362) === 100).toBeTruthy();
    expect(index.div(-20, 5.2)).toBe(-3.84615384615385); // 无限循环
    // expect(index.div(-2, 1.22) === -1.639344262295082).toBeTruthy();
    expect(index.div(-2.3, 2.5) === -0.92).toBeTruthy();
    // expect(index.div(-1.4, -2.2) === 0.6363636363636364).toBeTruthy();
    // expect(index.div(7, -3) === -2.3333333333333335).toBeTruthy();
    // expect(index.div(7, -0.076) === -92.10526315789471).toBeTruthy();
    expect(index.div(-2.9, 8.0) === -0.3625).toBeTruthy();
    // expect(index.div(2, 6.6) === 0.30303030303030304).toBeTruthy();
    expect(index.div(-8, 10.0) === -0.8).toBeTruthy();
    // expect(index.div(8, -1.1) === -7.272727272727273).toBeTruthy();
  
    expect(index.div(-1.23e4, 20) === -615).toBeTruthy();
  });

  test(" ((2.3 * 2018.1) + 0.1+ 0.2) - 2.3 * 2018.1 -0.1-0.2", () => {
    expect(index.sum(index.mul(2.3, 2018.1), 0.1, 0.2, -index.mul(2.3, 2018.1), -0.1, -0.2)).toBe(0);
  });

});
