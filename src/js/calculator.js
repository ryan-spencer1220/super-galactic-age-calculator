export default class UserAge {
  constructor(age) {
    this.age = age;
  }
  mercuryCalculator() {
    return Math.floor(this.age / 0.24);
  }
  venusCalculator() {
    return Math.floor(this.age / 0.62);
  }
  marsCalculator() {}
}
