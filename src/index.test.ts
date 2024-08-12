import { randomInt } from "crypto";
import { add } from ".";

describe(add.name, () => {
  it("should return a value", () => {
    const result = add(1, 1);
    expect(result).toBeTruthy();
  });

  it("should not have a flaky tests", () => {
    const value = randomInt(10);
    expect(value).toBeLessThan(5);
  });
});
