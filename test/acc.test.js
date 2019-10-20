const acc = require("../other/acc");

describe("acc", () => {
  test("0.1 + 0.2", () => {
    expect(0.1 + 0.2).not.toBe(0.3);
    const ans = acc.add(0.1, 0.2);
    expect(ans).toBe(0.3);
  });

  test("2.01-0.01", () => {
    expect(2.01-0.01).not.toBe(2);
    const ans = acc.sub(2.01, 0.01);
    expect(ans).toBe(2);
    expect(acc.sub(4641.93, 4641.63)).toBe(0.3);
  });

  
  test("0.1 * 0.2", () => {
    expect(0.1 * 0.2).not.toBe(0.02);
    const ans = acc.mul(0.1, 0.2);
    expect(ans).toBe(0.02);
  });

  test("2.01/0.01", () => {
    expect(2.01/0.01).not.toBe(201);
    const ans = acc.div(2.01, 0.01);
    expect(ans).toBe(201);
  });

});
