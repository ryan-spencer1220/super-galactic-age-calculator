import UserAge from "../src/js/calculator.js";

describe("UserAge", () => {
  let user;
  beforeEach(() => {
    user = new UserAge(30);
  });

  it("should create a new UserAge object", () => {
    expect(user.age).toEqual(30);
  });
  it("should return the age of the user in Mercury years", () => {
    expect(user.mercuryCalculator()).toEqual(125);
  });
  it("should return the age of the user in Venus years", () => {
    expect(user.venusCalculator()).toEqual(48);
  });
  it("should return the age of the user in Mars years", () => {
    expect(user.marsCalculator()).toEqual(15);
  });
});
