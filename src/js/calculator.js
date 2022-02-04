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

  lifeExpectancyCalculator() {
    let mercuryExpectancy = Math.floor(
      this.lifeExpectancy / 0.24 - this.age / 0.24
    ); // 195
    let venusExpectancy = Math.floor(
      this.lifeExpectancy / 0.62 - this.age / 0.62
    ); // 76
    let marsExpectancy = Math.floor(
      this.lifeExpectancy / 1.88 - this.age / 1.88
    ); // 25
    let jupiterExpectancy = Math.floor(
      this.lifeExpectancy / 11.86 - this.age / 11.86
    ); // 4
    let lifeExpectancyArray = [
      mercuryExpectancy,
      venusExpectancy,
      marsExpectancy,
      jupiterExpectancy,
    ];
    return lifeExpectancyArray;
  }
}
