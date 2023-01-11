const mathOperations = require("./calculator");

describe("Addintion test", () => {
  test("adding 1 + 2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
});

describe("Subtraction test", () => {
  test("subtracting 1 - 2 should return -1", () => {
    expect(mathOperations.diff(1, 2)).toBe(-1);
  });
});

describe("Multiply test", () => {
  test("multiply 1 * 2 should return 2", () => {
    expect(mathOperations.product(1, 2)).toBe(2);
  });
});
