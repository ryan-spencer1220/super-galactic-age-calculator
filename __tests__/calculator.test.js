import UserAge from "../src/js/calculator.js";

describe("UserAge", () => {
  let user;
  beforeEach(() => {
    user = new UserAge(30);
  });
});

it("should create a new UserAge object", () => {
  expect(user.age).toEqual(30);
});
