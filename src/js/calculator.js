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

  mercuryExpectancy() {
    let mercuryYearsRemaining = Math.floor(
      this.lifeExpectancy / 0.24 - this.age / 0.24
    );
    if (mercuryYearsRemaining >= 0) {
      return mercuryYearsRemaining;
    } else {
      return `You've lived ${Math.abs(
        mercuryYearsRemaining
      )} years over the entered life expectancy!`;
    }
  }

  venusExpectancy() {
    let venusYearsRemaining = Math.floor(
      this.lifeExpectancy / 0.62 - this.age / 0.62
    );
    if (venusYearsRemaining >= 0) {
      return venusYearsRemaining;
    } else {
      return `You've lived ${Math.abs(
        venusYearsRemaining
      )} years over the entered life expectancy!`;
    }
  }

  marsExpectancy() {
    let marsYearsRemaining = Math.floor(
      this.lifeExpectancy / 1.88 - this.age / 1.88
    );
    if (marsYearsRemaining >= 0) {
      return marsYearsRemaining;
    } else {
      return `You've lived ${Math.abs(
        marsYearsRemaining
      )} years over the entered life expectancy!`;
    }
  }

  jupiterExpectancy() {
    let jupiterYearsRemaining = Math.floor(
      this.lifeExpectancy / 11.86 - this.age / 11.86
    );
    if (jupiterYearsRemaining >= 0) {
      return jupiterYearsRemaining;
    } else {
      return `You've lived ${Math.abs(
        jupiterYearsRemaining
      )} years over the entered life expectancy!`;
    }
  }
  //
  //   lifeExpectancyCalculator() {
  //     let mercuryExpectancy = Math.abs(
  //       Math.floor(this.lifeExpectancy / 0.24 - this.age / 0.24)
  //     );
  //     let venusExpectancy = Math.abs(
  //       Math.floor(this.lifeExpectancy / 0.62 - this.age / 0.62)
  //     );
  //     let marsExpectancy = Math.abs(
  //       Math.floor(this.lifeExpectancy / 1.88 - this.age / 1.88)
  //     );
  //     let jupiterExpectancy = Math.abs(
  //       Math.floor(this.lifeExpectancy / 11.86 - this.age / 11.86)
  //     );
  //     let lifeExpectancyArray = [
  //       mercuryExpectancy,
  //       venusExpectancy,
  //       marsExpectancy,
  //       jupiterExpectancy,
  //     ];
  //     return lifeExpectancyArray;
  //   }
}
