const  { create, all } = require("mathjs");
const math = create(all);
math.config({
number: 'BigNumber',      // Default type of number:
                            // 'number' (default), 'BigNumber', or 'Fraction'
precision: 64             // Number of significant digits for BigNumbers
});
  
describe("mathjs", () => {
  test("0.1 + 0.2", () => {
    expect(0.1 + 0.2).not.toBe(0.3);
    const ans = math.evaluate('0.1 + 0.2');
    expect(math.number(ans)).toBe(0.3);
  });

  test("2.01-0.01", () => {
    expect(2.01-0.01).not.toBe(2);
    const ans = math.evaluate('2.01-0.01');
    expect(math.number(ans)).toBe(2);
  });

  
  test("0.1 * 0.2", () => {
    expect(0.1 * 0.2).not.toBe(0.02);
    const ans = math.evaluate('0.1 * 0.2');
    expect(math.number(ans)).toBe(0.02);
  });

  test("2.01/0.01", () => {
    expect(2.01/0.01).not.toBe(201);
    const ans = math.evaluate('2.01/0.01');
    expect(math.number(ans)).toBe(201);
  });

});
