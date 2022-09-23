export class Calculations {
  static randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }

  static calculation(number1, number2, sign) {
    if (sign === "+") {
      return number1 + number2;
    } else if (sign === "-") {
      return number1 - number2;
    }
  }
}
