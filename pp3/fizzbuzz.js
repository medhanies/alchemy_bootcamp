function fizzBuzz(numbers) {
  let string = "";
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      string += "fizz";
    }
    if (numbers[i] % 5 === 0) {
      string += "buzz";
    }
  }
  return string;
}
