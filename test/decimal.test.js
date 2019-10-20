const Decimal = require("decimal.js");

describe("decimal", () => {
  test("0.1 + 0.2", () => {
    expect(0.1 + 0.2).not.toBe(0.3);
    const ans = Decimal.add(0.1, 0.2).toNumber(); //new Decimal(0.1).plus(0.2).toNumber();
    expect(ans).toBe(0.3);
  });

  test("2.01-0.01", () => {
    expect(2.01-0.01).not.toBe(2);
    const ans = Decimal.sub(2.01, 0.01).toNumber();// new Decimal(2.01).minus(0.01).toNumber();
    expect(ans).toBe(2);
  });

  
  test("0.1 * 0.2", () => {
    expect(0.1 * 0.2).not.toBe(0.02);
    const ans = Decimal.mul(0.1, 0.2).toNumber();//new Decimal(0.1).times(0.2).toNumber();
    expect(ans).toBe(0.02);
  });

  test("2.01/0.01", () => {
    expect(2.01/0.01).not.toBe(201);
    const ans = Decimal.div(2.01, 0.01).toNumber();
    expect(ans).toBe(201);
    Decimal.set({ precision: 64, rounding: 4 })
    // expect(Decimal.div(-20, 5.2).toString()).toBe('-3.846153846153846153846153846153846153846153846153846153846153846');
  });

});
