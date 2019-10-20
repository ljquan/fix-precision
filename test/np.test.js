const NP = require("number-precision");

describe("matchjs", () => {
  test("0.1 + 0.2", () => {
    expect(0.1 + 0.2).not.toBe(0.3);
    const ans = NP.plus(0.1, 0.2);
    expect(ans).toBe(0.3);
    expect(NP.plus(0.1, 0.2) === 0.3).toBeTruthy();
    expect(NP.plus(2.3, 2.4) === 4.7).toBeTruthy();
    expect(NP.plus(-1.6, -1) === -2.6).toBeTruthy();
    expect(NP.plus(-2.0, 63) === 61).toBeTruthy();
    expect(NP.plus(-3, 7) === 4).toBeTruthy();
    expect(NP.plus(-221, 38) === -183).toBeTruthy();
    expect(NP.plus(-1, 0) === -1).toBeTruthy();
    expect(NP.plus(2.018, 0.001) === 2.019).toBeTruthy();
    expect(NP.plus(1.3224e10, 1.3224e3) === 13224001322.4).toBeTruthy();
    expect(NP.plus(1.6e-30, 1.6e-30) === 3.2e-30).toBeTruthy();
    expect(NP.plus(0.1, 0.2, 0.3) === 0.6).toBeTruthy();
  });

  test("2.01-0.01", () => {
    expect(2.01-0.01).not.toBe(2);
    const ans = NP.minus(2.01, 0.01);
    expect(ans).toBe(2);
  });

  
  test("0.1 * 0.2", () => {
    expect(0.1 * 0.2).not.toBe(0.02);
    const ans = NP.times(0.1, 0.2);
    expect(ans).toBe(0.02);
  });

  test("2.01/0.01", () => {
    expect(2.01/0.01).not.toBe(201);
    const ans = NP.divide(2.01, 0.01);
    expect(ans).toBe(201);
  });

});
