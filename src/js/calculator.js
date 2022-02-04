export default class UserAge {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }
  mercuryCalculator() {
    return Math.floor(this.age / 0.24);
  }
  venusCalculator() {
    return Math.floor(this.age / 0.62);
  }
  marsCalculator() {
    return Math.floor(this.age / 1.88);
  }
  jupiterCalculator() {
    return Math.floor(this.age / 11.86);
  }
}
