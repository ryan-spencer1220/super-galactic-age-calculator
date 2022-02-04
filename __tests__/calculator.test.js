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
  it("should return the remaining years a user has left on Mercury", () => {
    expect(user.mercuryExpectancy()).toEqual(195);
  });
  it("should return the remaining years a user has left on Mercury", () => {
    user.age = 78;
    user.lifeExpectancy = 77;
    expect(user.mercuryExpectancy()).toEqual(
      "You've lived 5 years over the entered life expectancy!"
    );
  });
  it("should return the remaining years a user has left on Venus", () => {
    expect(user.venusExpectancy()).toEqual(75);
  });
  it("should return the remaining years a user has left on Venus", () => {
    user.age = 78;
    user.lifeExpectancy = 77;
    expect(user.venusExpectancy()).toEqual(
      "You've lived 2 years over the entered life expectancy!"
    );
  });
  it("should return the remaining years a user has left on Mars", () => {
    expect(user.marsExpectancy()).toEqual(25);
  });
  it("should return the remaining years a user has left on Mars", () => {
    user.age = 78;
    user.lifeExpectancy = 77;
    expect(user.marsExpectancy()).toEqual(
      "You've lived 1 years over the entered life expectancy!"
    );
  });
  it("should return the remaining years a user has left on Jupiter", () => {
    expect(user.jupiterExpectancy()).toEqual(3);
  });
  it("should return the remaining years a user has left on Jupiter", () => {
    user.age = 78;
    user.lifeExpectancy = 77;
    expect(user.jupiterExpectancy()).toEqual(
      "You've lived 1 years over the entered life expectancy!"
    );
  });
});
