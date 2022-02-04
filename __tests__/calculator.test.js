import UserAge from "../src/js/calculator.js";

describe("UserAge", () => {
  let user;
  beforeEach(() => {
    user = new UserAge(30, 77);
  });

  it("should create a new UserAge object", () => {
    expect(user.age).toEqual(30);
    expect(user.lifeExpectancy).toEqual(77);
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
  it("should return the age of the user in Jupiter years", () => {
    expect(user.jupiterCalculator()).toEqual(2);
  });
  it("should return the remaining years a user has left on each planet based on user inputted life expectancy", () => {
    expect(user.lifeExpectancyCalculator()).toEqual(2);
  });
});
